import Layout from "../layout"

function Input({placeholder,onChange}) {
    return (
        <Layout>
            <input 
                placeholder={placeholder}
                onChange={onChange}
            />

            <style jsx>
            {`
                input {
                    display: block;
                    padding: 15px 15px;
                    outline: none;
                    border: none;
                    border-radius: 2rem;
                    margin: 1rem 0rem;
                    font-size: 18px;
                    text-align: center;
                    width: 300px;
                }
            `}
            </style>
        </Layout>
    )
}

export default Input