state = [
  {
    type: 'locationSelector',
    id: 123,
    fields: {}
  }
]


function createEntity(entity) {
  return (dispatch, getState) => {
    const entityProxy = {dispatch, id: uniqueId()};
    dispatch(pushEntity({...entityProxy, ...entity}));
    return entityProxy;
  };
}

function reduceLocationSelector(entity, action) {
  entity = {...entity};

  switch (action.type) {
    case 'SET_LS_VALUE':
      entity.fields.value = action.payload.value;
      break;
  }
}

function createLocationSelector() {
  return createEntity({type: 'fooo', fields: {}});
}



store.registerReducer('locationSelector', reduceLocationSelector);

const locationSelectorProxy = dispatch(createLocationSelector());

const fooBarProxy = dispatch(createLocationSelector());

locationSelectorProxy::setLocationSelectorValue('newValue');

locationSelectorProxy::getFooBar();

locationSelectorProxy::setFooBar(fooBarProxy);

locationSelectorProxy::getLocationsCache();
