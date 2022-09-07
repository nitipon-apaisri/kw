import Head from "next/head";
import { useContext } from "react";
import Loader from "../../components/Loader";
import { HodlContext } from "../../store/hodl";
import PrimaryCardStyle from "../../components/PrimaryCardStyle";
import Meta from "../../components/Meta";
import Link from "next/link";
const Collectors = () => {
    const hodlContext = useContext(HodlContext);
    const searchCollector = (value) => {
        const currValue = value;
        hodlContext.setSearchValue(currValue);
        const filteredData = hodlContext.collectors.filter((name) => name.accountId.includes(currValue));
        hodlContext.setSearchResults(filteredData);
    };
    return (
        <div className="collectors mt-10 mb-20">
            <Meta title="KW | Collectors" />

            <div className="wrapper">
                <div className="flex justify-between items-center sm:block">
                    <h1 className="text-3xl font-bold tracking-wider">
                        <span className="text-pink">KW</span> COLLECTORS
                    </h1>
                    <form>
                        <input
                            className="border border-light_gray p-2 rounded-lg w-60 sm:w-full sm:mt-4"
                            placeholder="search collector"
                            value={hodlContext.searchValue}
                            onChange={(e) => {
                                hodlContext.ownerIds.length === hodlContext.skip && searchCollector(e.target.value);
                            }}
                        ></input>
                    </form>
                </div>
                <hr className=" my-5" style={{ borderColor: "rgb(226 232 240)" }} />
                {hodlContext.ownerIds.length !== hodlContext.skip ? (
                    <Loader />
                ) : (
                    <div className="grid gap-8 grid-cols-3 md:grid-cols-2 xs:grid-cols-1 mt-6 px-4">
                        {!hodlContext.searchValue
                            ? hodlContext.collectors
                                  .sort((a, b) => (a.accountId < b.accountId ? -1 : 1))
                                  //filter to find unique token by token title ref: https://stackoverflow.com/a/56757215
                                  //v,i,a = value, index, array
                                  .filter((v, i, a) => a.findIndex((v2) => v2._id === v._id) === i)
                                  .map((r, i) => (
                                      <div key={r._id}>
                                          <Link href={`/${r.accountId}`}>
                                              <a>
                                                  <PrimaryCardStyle
                                                      media={r.imgUrl !== undefined && `https://paras-cdn.imgix.net/${r.imgUrl.replace("ipfs://", "")}`}
                                                      cover={r.coverUrl !== undefined ? r.coverUrl.replace("ipfs://", "") : null}
                                                      title={r.accountId}
                                                  />
                                              </a>
                                          </Link>
                                      </div>
                                  ))
                            : hodlContext.searchResults
                                  .sort((a, b) => (a.accountId < b.accountId ? -1 : 1))
                                  //filter to find unique token by token title ref: https://stackoverflow.com/a/56757215
                                  //v,i,a = value, index, array
                                  .filter((v, i, a) => a.findIndex((v2) => v2._id === v._id) === i)
                                  .map((r, i) => (
                                      <div key={r._id}>
                                          <Link href={`/${r.accountId}`}>
                                              <a>
                                                  <PrimaryCardStyle
                                                      media={r.imgUrl !== undefined && `https://paras-cdn.imgix.net/${r.imgUrl.replace("ipfs://", "")}`}
                                                      cover={r.coverUrl !== undefined ? r.coverUrl.replace("ipfs://", "") : null}
                                                      title={r.accountId}
                                                  />
                                              </a>
                                          </Link>
                                      </div>
                                  ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Collectors;
