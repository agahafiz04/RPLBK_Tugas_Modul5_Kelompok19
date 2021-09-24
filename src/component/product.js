import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Modal from "@material-ui/core/Modal";
import Typography from "@material-ui/core/Typography";


const DetailResep = createContext();

export default function Resep() {
    const [resep, setResep] = useState([]);
    const [nama, setNama] = useState('');
    const [bahan, setBahan] = useState([]);
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        axios({
            method: "get",
            url: "http://localhost:3001/resep",
            headers: {
                accept: "*/*",
            },
        })

            .then((data) => {
                setResep(data.data);
            })

            .catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        <div>

            <h1>Aplikasi Resep Makanan</h1> 

            <article className="review">
                {resep.map((results) => {
                    return (
                        <article item key={results.nama} md={3}>
                            <Card>
                                <CardActionArea onClick={() => { setOpen(true); setNama(results.nama); setBahan(results.bahan) }}>
                                    <CardMedia
                                        component="img"
                                        height="250"
                                        image={results.gambar}
                                    />
                                    <CardContent style={{ backgroundColor: '#33ff5c' }}>
                                        <h1>{results.nama}</h1>
                                        <h3>Jenis: {results.jenis}​​​​​​</h3>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </article>
                    );
                })}
            </article>
            
            <DetailResep.Provider value={{ nama: nama, bahan: bahan }}>
                <div>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-resep"
                        aria-describedby="modal-modal-detail"
                    >
                        <Detail />
                    </Modal>
                </div>
            </DetailResep.Provider>
        </div >
    );
}

function Detail() {
    const detail = useContext(DetailResep);
    return (
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={detail.bahan.picture}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Bahan-Bahan
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {detail.bahan.bumbu}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                Resep
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {detail.bahan.resep}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
       );
    } 