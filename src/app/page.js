"use client"

import { useEffect, useState } from "react"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { getOpenRequests } from "@/services/Web3Services"

export default function Home() {

  const [requests, setRequests] = useState([])

  useEffect(() => {
    loadRequests(0)
  }, [])

  async function loadRequests(lastId) {
    try {
      const requests = await getOpenRequests(lastId)
      console.log(result);
      if (lastId === 0) {
        setRequests(result)
      } else {
        requests.push(...result)
        setRequests(requests)
      }
    } catch (err) {
      console.error(err);
      alert(err.message)
    }
  }

  return (
    <>
      <Header></Header>

      <div className="container">
        <div className="row ps-5">
          <p className="lead m-4">Ajude nas doações</p>
        </div>
        <div className="p-4 mx-5">
          <div className="list-group">
            {
              requests && requests.length
              ? requests.map(rq => <Request key={rq.id} data={rq} />)
              : <>Conect sua carteira para ajudar ou pedir</>
            }
          </div>
        </div>
        <Footer></Footer>
      </div>

    </>
  )
}