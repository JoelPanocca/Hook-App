import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch'
import './examples.css'
export const MultipleCustomHooks = () => {
    const {state:nroCita, increment} = useCounter(1);
    const {loading , data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${nroCita}`);
    const {author, quote} = !!data && data[0];
    return (
        <div>
            <h1>BreakingBad Citas !!!</h1>
            <hr />

            {
                loading ?
                (
                    <div className="alert alert-info text-center"> Loading ... </div>
                ):
                (
                    <blockquote className="blockquote right">
                        <p className="mb-0 padbot">{ quote }</p>  
                        <footer className="blockquote-footer"> {author} </footer>  
                    </blockquote>
                )
            }

            <button className="btn btn-primary" onClick={() => increment()}>Siguiente Cita</button>
        </div>
    )
}
