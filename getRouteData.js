const fs = require('fs');
const fetch = require('node-fetch');
const xml2js = require('xml2js');
const {promisify} = require('util');
const readFileAsync = promisify(fs.readFile);
const parseString = xml2js.parseString;

const BASE_URL = 'http://webservices.nextbus.com/service/publicXMLFeed?a=sf-muni&command=';
const ALL_ROUTES_URL = `${BASE_URL}routeList`;
const GET_ROUTE = `${BASE_URL}routeConfig&r=`;


function createObjectFromXml(xml) {
  return new Promise((resolve, reject) => {
    parseString(xml, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
}

async function getRoutesObject() {
  const result = await fetch(ALL_ROUTES_URL);
  const routesObject = await result.text();
  return routesObject;
}

async function getRouteDetails(tag) {
  const url = GET_ROUTE + tag;
  const result = await fetch(url);
  const routeXml = await result.text();
  return routeXml;
}

async function createRoutes() {
  console.log('CREATING: routes.xml');
  const constructedRoutesObject = {
    body: {
      route: []
    }
  };

  const routesXml = await getRoutesObject();
  const routesObject = await createObjectFromXml(routesXml);
  const allRoutes = routesObject.body.route;
  let count = 0;

  allRoutes.forEach(async (route) => {
    const routeXml = await getRouteDetails(route['$']['tag']);
    const routeObject = await createObjectFromXml(routeXml);

    const details = routeObject.body.route[0]['$'];
    constructedRoutesObject.body.route.push({
      '$': {
        tag: details.tag,
        title: details.title,
        color: details.color,
        oppositeColor: details.oppositeColor
      }
    });

    count++;

    if (count == allRoutes.length) {
      constructXmlRoutesFile(constructedRoutesObject);
    }
  });
}

function constructXmlRoutesFile(routesObject) {
  const builder = new xml2js.Builder();
  const xml = builder.buildObject(routesObject);

  fs.writeFile('routes.xml', xml, (err) => {
      if (err) throw err;
      console.log('CREATED: routes.xml');
  });
}

createRoutes();
