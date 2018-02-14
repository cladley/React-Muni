import routesReducer from '../routesReducer';


describe('routesReducer()', () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      routes: {
        byTag: {

        },
        allTags: []
      },
      getRoutesPending: false,
      getRoutesSuccess: false,
      getRouteFailure: false,
      searchTerm: ''
    };
  });

  describe("called with 'GET_ROUTES'", () => {
    const action = {type: 'GET_ROUTES'};
    let newState;
    beforeEach(() => {
      newState = routesReducer(initialState, action);
    });

    it('Should not mutate previous state', () => {
      expect(newState).not.toBe(initialState);
    });

    it('Should update getRoutesPending', () => {
      expect(newState.getRoutesPending).toEqual(true);
    });
  });

  describe("called with 'GET_ROUTES_FAILURE'", () => {
    const action = {type: 'GET_ROUTES_FAILURE'};
    let newState;
    beforeEach(() => {
      newState = routesReducer(initialState, action);
    });

    it('Should not mutate previous state', () => {
      expect(newState).not.toBe(initialState);
    });

    it('Should update getRoutesPending correctly', () => {
      expect(newState.getRoutesPending).toEqual(false);
    });
  });

  describe("called with 'SEARCH_TERM'", () => {
    const searchTerm = 'my test';
    const action = {type: 'SEARCH_TERM', searchTerm};
    let newState;

    beforeEach(() => {
      newState = routesReducer(initialState, action);
    });

    it('Should not mutate previous state', () => {
      expect(newState).not.toBe(initialState);
    });

    it("Should update searchTerm with 'my test'", () => {
      expect(newState.searchTerm).toEqual(searchTerm);
    });
  });

});
