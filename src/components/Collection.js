import { useContext, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import { GrPrevious } from "react-icons/gr";

import Brand from "./Brand";

import MainContext from "../MainContext";
import LazyLoad from "react-lazyload";
import Download from "./Download";
import Loader from "./Loader";

function Collection() {
  const { slugs } = useParams();
  const history = useHistory();
  const { setSelectedBrands, selectedBrands, brands } = useContext(MainContext);

  const clearSelecedBrands = () => {
    setSelectedBrands([]);
    history.push("/");
  };
  useEffect(() => {
    setSelectedBrands(slugs.split(","));
  }, []);

  return (
    <main className="content">
      <header className="header">
        <Link to="/" onClick={clearSelecedBrands}>
          <a className="back-btn">
            <GrPrevious />
            All Brands
          </a>
        </Link>

        {selectedBrands.length !== 0 && <Download />}
      </header>
      <section className="brands">
        {selectedBrands.map((slug) => {
          let brand = brands.find((brand) => brand.slug === slug);
          return (
            <LazyLoad
              key={brand.slug}
              once={true}
              overflow={true}
              placeholder={<Loader/>}
            >
              <Brand brand={brand} />
            </LazyLoad>
          );
        })}
      </section>
    </main>
  );
}

export default Collection;
