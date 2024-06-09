"use client"
import { useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { openRequest } from "@/services/Web3Services"

export default function Home() {

    const [request, setRequest] = useState({
        title: "",
        description: "",
        contact: "",
        goal: 0
    })

    function onInputChange(evt) {
        setRequest(prevState => ({...prevState, [evt.target.id]: evt.target.value}))
    }

    function btnSaveClick() {
        alert("Inciando o processo")
        openRequest(request).then(result => {
            alert("Pedido enviado com sucesso. Aguarde alguns minutos")
            window.location.href = "/"
        }).catch(err => {
            console.error(err);
            alert(err.message);
        })
    }

    return (
        <>
            <Header></Header>
            <div className="container">
                <div className="ps-5">
                    <div className="row my-3">
                        <p className="lead"> Preenha todos os campos abaixo para nos dizer oque precisa</p>
                    </div>
                    <div className="col-6">
                        <div className="form-floating mb-3">
                            <input type="text" id="title" className="form-control" maxLength={150} value={request.title} onChange={onInputChange}></input>
                            <label htmlFor="title">Resumo do que precisa</label>
                        </div>
                        <div className="form-floating mb-3">
                            <textarea id="description" className="form-control" style={{ height: 100 }} value={request.description} onChange={onInputChange}></textarea>
                            <label htmlFor="description">Descreva em detalhes onde vc esta para entregas presenciais</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="text" id="contact" className="form-control" maxLength={150} value={request.contact} onChange={onInputChange}></input>
                            <label htmlFor="contact">Contato (telefone ou email): </label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="number" id="goal" className="form-control" value={request.goal} onChange={onInputChange}></input>
                            <label htmlFor="goal">Meta em BNB (deixe em branco caso nao deseje receber doações em cripto)</label>
                        </div>

                        <div className="row">
                            <div className="col-3 mb-3">
                                <a href="/" className="btn btn-outline-dark col-12 p-3">Voltar</a>
                            </div>
                            <div className="col-8 mb-3 p-0">
                                <button type="button" className="btn btn-dark col-12 p-3" onClick={btnSaveClick}>Enviar Pedido</button>
                            </div>
                        </div>

                    </div>
                </div>
                <Footer></Footer>
            </div>

        </>
    )
}
