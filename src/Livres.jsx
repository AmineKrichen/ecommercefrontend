import { Button } from 'bootstrap'
import React, { useState } from 'react'
import { Form } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Afficherlivre from './Affichelivre';


const Livres = () => {
    const [livres, setLivres] = useState([
        {
            isbn: "42368756",
            titre: "ReactJS",
            auteur: "Romain Rissouan",
            annedition: 2021,
            prix: 33,
            couverture: "https://m.media-amazon.com/images/I/61vg+0-1yGL._SY466_.jpg"
        },
        {
            isbn: "123698745",
            titre: "Les VPNS",
            auteur: "Stephan@gmail.com",
            annedition: 2020,
            prix: 55,
            couverture:

                "http://res.cloudinary.com/isetsfax/image/upload/v1696761358/images/9782100491155_internet_w290.jpg",
        },
        {
            isbn: "54894",
            titre: "Techniques de Référencement Web",
            auteur: "Patrick Wampe",
            annedition: 2020,
            prix: 55,

            couverture: "https://blog.internet-formation.fr/wpcontent/uploads/2018/04/1e-4e-couverture-livre-SEO.jpg",
        },
        {
            isbn: "5464sf",
            titre: "VueJS",
            auteur: "Alexandra Martin",
            annedition: 2020,
            prix: 20,

            couverture: "https://m.media-amazon.com/images/I/718QqTspltL._SY466_.jpg",
        },
        {
            isbn: "65465445",
            titre: "Laravel",
            auteur: "Eric Sarrion",
            annedition: 2020,
            prix: 50,
            couverture:

                "https://images.booksense.com/images/132/218/9798554218132.jpg",
        }
    ]
    )
    const handleDelete = (isbn) => {
        setLivres(livres.filter(l => l.isbn != isbn))
    }
    const [livre, setLivre] = useState({
        isbn: "",
        titre: "",
        auteur: " ",
        annedition: 2024,
        prix: 0,
        couverture: ""
    })
    const handleAdd = () => {
        setLivres([...livres, livre])
    }
    return (
        <div>
            <button className="btn btn-success" onClick={() => handleAdd()}>Ajouter</button>
            <Form>
                <Form.Group className="mb-3" >

                    <Form.Control type="text" placeholder="ISBN" value={livre.isbn} onChange={(e) => setLivre({ ...livre, isbn: e.target.value })} />

                </Form.Group>
                <Form.Group className="mb-3" >

                    <Form.Control type="text" placeholder="Titre" value={livre.titre} onChange={(e) => setLivre({ ...livre, titre: e.target.value })} />
                </Form.Group>
                <Form.Group className="mb-3" >

                    <Form.Control type="text" placeholder="Auteur" value={livre.auteur} onChange={(e) => setLivre({ ...livre, auteur: e.target.value })} />
                </Form.Group>
                <Form.Group className="mb-3" >

                    <Form.Control type="number" placeholder="Annee Edition" value={livre.annedition} onChange={(e) => setLivre({ ...livre, annedition: e.target.value })} />
                </Form.Group>
                <Form.Group className="mb-3" >

                    <Form.Control type="number" placeholder="Prix" value={livre.prix} onChange={(e) => setLivre({ ...livre, prix: e.target.value })} />
                </Form.Group>
                <Form.Group className="mb-3" >

                    <Form.Control type="text" placeholder="Image" value={livre.couverture} onChange={(e) => setLivre({ ...livre, couverture: e.target.value })} />
                </Form.Group>

            </Form>
            <Afficherlivre livres={livres} />
        </div>
    )
}

export default Livres