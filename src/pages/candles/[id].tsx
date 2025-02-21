import { NextPage } from "next";
import { useRouter } from "next/router";

const CandlePage: NextPage = () => {
    const {asPath, pathname} = useRouter()


    
    return <div>Candle Page</div>
}

export default CandlePage