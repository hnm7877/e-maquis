

export const CardBilan = () => {
    return (
        <div className="row row-sm col-sm-12 col-md-12 col-xl-12">
            <div className="col-sm-6 col-xl-3">
                <div className="bg-teal rounded overflow-hidden">
                    <div className="pd-25 d-flex align-items-center">
                        <i className="ion ion-earth tx-60 lh-0 tx-white op-7"></i>
                        <div className="mg-l-20">
                            <p className="tx-10 tx-spacing-1 tx-mont tx-medium tx-uppercase tx-white-8 mg-b-10">Today's
                                Visits</p>
                            <p className="tx-24 tx-white tx-lato tx-bold mg-b-2 lh-1">1,975,224</p>
                            <span className="tx-11 tx-roboto tx-white-6">24% higher yesterday</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-sm-6 col-xl-3 mg-t-20 mg-sm-t-0">
                <div className="bg-danger rounded overflow-hidden">
                    <div className="pd-25 d-flex align-items-center">
                        <i className="ion ion-bag tx-60 lh-0 tx-white op-7"></i>
                        <div className="mg-l-20">
                            <p className="tx-10 tx-spacing-1 tx-mont tx-medium tx-uppercase tx-white-8 mg-b-10">Today
                                Sales</p>
                            <p className="tx-24 tx-white tx-lato tx-bold mg-b-2 lh-1">$329,291</p>
                            <span className="tx-11 tx-roboto tx-white-6">$390,212 before tax</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-sm-6 col-xl-3 mg-t-20 mg-xl-t-0">
                <div className="bg-primary rounded overflow-hidden">
                    <div className="pd-25 d-flex align-items-center">
                        <i className="ion ion-monitor tx-60 lh-0 tx-white op-7"></i>
                        <div className="mg-l-20">
                            <p className="tx-10 tx-spacing-1 tx-mont tx-medium tx-uppercase tx-white-8 mg-b-10">%
                                Unique Visits</p>
                            <p className="tx-24 tx-white tx-lato tx-bold mg-b-2 lh-1">54.45%</p>
                            <span className="tx-11 tx-roboto tx-white-6">23% average duration</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-sm-6 col-xl-3 mg-t-20 mg-xl-t-0">
                <div className="bg-br-primary rounded overflow-hidden">
                    <div className="pd-25 d-flex align-items-center">
                        <i className="ion ion-clock tx-60 lh-0 tx-white op-7"></i>
                        <div className="mg-l-20">
                            <p className="tx-10 tx-spacing-1 tx-mont tx-medium tx-uppercase tx-white-8 mg-b-10">Bounce
                                Rate</p>
                            <p className="tx-24 tx-white tx-lato tx-bold mg-b-2 lh-1">32.16%</p>
                            <span className="tx-11 tx-roboto tx-white-6">65.45% on average time</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
