import React from 'react'
import { Form } from 'react-bootstrap'

const Ajoutlivres = () => {
    return (
        <>
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
        </>
    )
}

export default Ajoutlivres

