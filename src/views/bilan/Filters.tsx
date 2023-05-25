import { DateFilter } from '../../components/DateFilter';
import { InputSearch } from '../../components/InputSearch';

export const Filters = () => {
  return (
    <div className='bilan-filters'>
      {/* <Glyphicon glyph='star' /> */}
      <InputSearch />
      <DateFilter />

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
