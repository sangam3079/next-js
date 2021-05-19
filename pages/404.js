
import Link from 'next/link'
import {useEffect} from 'react'
import {Router, useRouter} from 'next/router'

const PageNotFound = () => {

    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
           //router.go(1)
           router.push('/')
        }, 3000) 
    }, [])


    return ( 
        <div className='not-found'>
            <h1>Ooops...</h1>
            <h2>That page cannot be found :(</h2>
            <p>Go back to the <Link href="/"><a>Homepage</a></Link></p>
        </div>
     );
}
 
export default PageNotFound;