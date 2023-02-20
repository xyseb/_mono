import React, { useContext } from 'react';
import { CentreContext, CentreContextType } from '../../../contexts/CentreContextProvider';
import './HomePage.scss';

import { RootState } from '../../../stores/RtkStore';
import { useSelector, useDispatch } from 'react-redux'

//import { useQuery } from 'react-query';

function HomePage() {
  const { centre } = useContext(CentreContext) as CentreContextType;
  const centreNameElement = (centre.Nom === undefined)
        ? <h3 className='default'>State CentreContext.Nom = "undefined"</h3>
        : <h3>State de CentreContext.Nom = "{centre.Nom}"</h3>;
  const centreParamsElement = (centre.Params === undefined)
        ? <h3 className='default'>State CentreContext.Params = "undefined"</h3>
        : <h3>State CentreContext.Params = "chargés"</h3>;

  const storeCentre = useSelector((state: RootState) => state.centre)
///  const storeCentreParams = useSelector((state: RootState) => state.centre.Params)
  const rtkStoreCentreNameElement = (storeCentre.Nom === undefined)
        ? <h3 className='default'>State RtkStore.Nom = "undefined"</h3>
        : <h3>State de RtkStore.Nom = "{storeCentre.Nom}"</h3>;
  const rtkStoreCentreParamsElement = (storeCentre.Params === undefined)
        ? <h3 className='default'>State RtkStore.Params = "undefined"</h3>
        : <h3>State RtkStore.Params = "chargés"</h3>;

  
  // const { isLoading: loadingCentre, error: errorCentre, data: centreData } = useQuery(
  //   'centre',
  //   () => fetch('http://localhost:8080/centre').then(res => res.json()),
  //   { staleTime: 60000, }
  // );
  // const rqStoreCentreNameElement = (centreData === undefined || centreData.Name === undefined)
  //       ? <h3 className='default'>State CentreContext.Nom = "undefined"</h3>
  //       : <h3>State de CentreContext.Nom = "{centreData.Name}"</h3>;
  
  // const { isLoading: loadingParams, error: errorParams, data: paramsData, isFetching: isCentreFetching,  refetch } = useQuery('centreParams', () =>
  // fetch('http://localhost:8080/params').then(res =>
  //   res.json()
  // ), { enabled: false });
  // const rqStoreCentreParamsElement = (paramsData === undefined || paramsData.Params === undefined)
  //       ? <h3 className='default'>State CentreContext.Params = "undefined"</h3>
  //       : <h3>State CentreContext.Params = "chargés"</h3>;

  return (
    <div className="homepage">
      <div>
        <h1>CentreContext</h1>
        <p>Pas de requêtes d'API depuis ce composant. Uniquement lecture du context CentreContext.
          <br/>Valeur par défaut explicite si le context n'est pas chargé. Valeur du state du context si chargé.</p>
        {centreNameElement}
        {centreParamsElement}       
      </div>
      <div>
        <h1>RQ Cache Store</h1>
        <p>Pas de requêtes d'API depuis ce composant. Uniquement lecture du cache RQ.
          <br/>Valeur par défaut explicite si le store n'est pas chargé. Valeur du state du store si chargé.</p>
        {/* {rqStoreCentreNameElement}
        {rqStoreCentreParamsElement} */}
      </div>
      <div>
        <h1>RTK Store</h1>
        <p>Pas de requêtes d'API depuis ce composant. Uniquement lecture du store RTK.
          <br/>Valeur par défaut explicite si le store n'est pas chargé. Valeur du state du store si chargé.</p>
        {rtkStoreCentreNameElement}
        {rtkStoreCentreParamsElement}
      </div>
    </div>
  );
}

export default HomePage;
