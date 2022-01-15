 import {useRouter} from "next/router"

const pageNo = () => {
    const router = useRouter();
    
    const param = router.query.pageNo;
    return (
        <div>
            this is page number {param}
        </div>
    )
}

export default pageNo 
