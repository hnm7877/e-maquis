import { DateFilter } from '../../components/DateFilter';
import { InputSearch } from '../../components/InputSearch';
import { UserFilter } from '../../components/UserFilter';

export const Filters = () => {
  return (
    <div className='bilan-filters'>
      {/* <Glyphicon glyph='star' /> */}
        <div id="inputSearch">
            <InputSearch />
        </div>

        <div id="dateFilter">
            <DateFilter />
        </div>

      <UserFilter />

      {/*

        DATE
        EMPLOYE
        RECHERCHE PAR NOM
        // FEATURE
        // PAR BOISSON
        // PAR CATEGORIE
        // INTERVAL DE PRIX
        //
    */}
    </div>
  );
};
