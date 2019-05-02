import { createSelector } from 'reselect';
import pluginId from 'pluginId';

/**
 * Direct selector to the examplePage state domain
 */
const selectCreateImportPageDomain = () => state =>
  state.get(`${pluginId}_createImageFormatPage`);

/**
 * Default selector used by HomePage
 */

const makeSelectLoading = () =>
  createSelector(selectCreateImportPageDomain(), substate =>
    substate.get('loading')
  );

const makeSelectModels = () =>
  createSelector(selectCreateImportPageDomain(), substate =>
    substate.get('models')
  );

const makeSelectCreated = () =>
  createSelector(selectCreateImportPageDomain(), substate =>
    substate.get('created')
  );

const makeSelectSaving = () =>
  createSelector(selectCreateImportPageDomain(), substate =>
    substate.get('saving')
  );

export {
  makeSelectLoading,
  makeSelectModels,
  makeSelectCreated,
  makeSelectSaving
};
