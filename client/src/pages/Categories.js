
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../components/Layout/Layout";

const Categories = () => {
  const categories = useCategory();
  return (
    <Layout title={"All Categories"}>
      <div className="container lb  " style={{ marginTop: "100px"  }}>
        <div className="row container ">
          {categories.map((c) => (
            <div className="col-md-3 mt-5 mb-3 w-25 gx-3 gy-3" key={c._id}>
              <div className="card lb w-100">
                <Link to={`/category/${c.slug}`} className="btn cat-btn">
                  {c.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
