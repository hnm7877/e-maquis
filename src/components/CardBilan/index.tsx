import './card.css';
import { useProducts } from '../../hooks/useProducts';
import { useAppSelector } from '../../hooks/useRedux';


export const CardBilan = () => {

    const { products, isLoading } = useProducts();

    const search = useAppSelector((s) => s.filters.search);

    const allProducts =
        (search
            ? products?.filter((product) => {
                return (
                    product.nom.toLowerCase().includes(search.toLowerCase()) ||
                    product.categorie.nom
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||
                    product.taille.toLowerCase().includes(search.toLowerCase())
                );
            })
            : products) || [];

    const total_ventes = allProducts?.reduce((acc, product) => {
        return acc + product.total_vente;
    }, 0);

    const benefice = allProducts?.reduce((acc, product) => {
        return acc + product.benefice;
    }, 0);

    const total_achat = allProducts?.reduce((acc, product) => {
        return acc + product.prix_achat * product.quantite;
    }, 0);


    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-xl-4">
            <div className="col">
                <div className="bg-teal rounded overflow-hidden">
                    <div className="pd-25 d-flex align-items-center">
                        <i className="ion ion-earth tx-60 lh-0 tx-white op-7"></i>
                        <div className="mg-l-20">
                            <p className="tx-10 tx-spacing-1 tx-mont tx-medium tx-uppercase tx-white-8 mg-b-10">Total achat</p>
                            <p className="tx-24 tx-white tx-lato tx-bold mg-b-2 lh-1">{total_achat}</p>
                            <span className="tx-11 tx-roboto tx-white-6"></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="bg-danger rounded overflow-hidden">
                    <div className="pd-25 d-flex align-items-center">
                        <i className="ion ion-bag tx-60 lh-0 tx-white op-7"></i>
                        <div className="mg-l-20">
                            <p className="tx-10 tx-spacing-1 tx-mont tx-medium tx-uppercase tx-white-8 mg-b-10">Total Ventes</p>
                            <p className="tx-24 tx-white tx-lato tx-bold mg-b-2 lh-1">{total_ventes}</p>
                            <span className="tx-11 tx-roboto tx-white-6"></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="bg-primary rounded overflow-hidden">
                    <div className="pd-25 d-flex align-items-center">
                        <i className="ion ion-monitor tx-60 lh-0 tx-white op-7"></i>
                        <div className="mg-l-20">
                            <p className="tx-10 tx-spacing-1 tx-mont tx-medium tx-uppercase tx-white-8 mg-b-10">Total bénéfice</p>
                            <p className="tx-24 tx-white tx-lato tx-bold mg-b-2 lh-1">{benefice}</p>
                            <span className="tx-11 tx-roboto tx-white-6"></span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col">
                <div className="bg-br-primary rounded overflow-hidden">
                    <div className="pd-25 d-flex align-items-center">
                        <i className="ion ion-clock tx-60 lh-0 tx-white op-7"></i>
                        <div className="mg-l-20">
                            <p className="tx-10 tx-spacing-1 tx-mont tx-medium tx-uppercase tx-white-8 mg-b-10">Bounce Rate</p>
                            <p className="tx-24 tx-white tx-lato tx-bold mg-b-2 lh-1">32.16%</p>
                            <span className="tx-11 tx-roboto tx-white-6">65.45% on average time</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}


