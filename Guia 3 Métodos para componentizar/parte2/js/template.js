const template = document.getElementById("card-template");
const contenedor = document.getElementById("contenedor");

const productos = [
    { titulo: "Laptop", desc: "16GB RAM", price: 100, imagen: "https://www.asus.com/media/Odin/Websites/global/ProductLine/20200824120814.jpg"},
    { titulo: "Mouse", desc: "Inalámbrico", price: 100, imagen: "https://hipercentroelectronico.com/wp-content/uploads/2020/07/Hipercentro-Electronico-mouse-gamer-inalambrico-JYR-MGJR-035-2.jpg" },
    { titulo: "camara", desc: "Inalámbrico", price: 100, imagen: "https://img.pccomponentes.com/pcblog/7807/mejores-webcam-para-streaming-teletrabajo.jpg" },
    { titulo: "pantalla", desc: "Inalámbrico", price: 100, imagen: "https://corporativo.tecnoplaza.com.co/wp-content/uploads/2021/08/Monitor-Curvo-Empresarial-Samsung-49-CJ89-4-600x600.jpg" },
    { titulo: "sonido", desc: "Inalámbrico", price: 100, imagen: "https://ss630.liverpool.com.mx/xl/1119834747.jpg" }
];

productos.forEach(p => {
    const clon = template.content.cloneNode(true);
    clon.querySelector(".title").textContent = p.titulo;
    clon.querySelector(".desc").textContent = p.desc;
    clon.querySelector(".price").textContent = p.price.toLocaleString("Es-co");
    clon.querySelector("img").src = p.imagen;
    contenedor.appendChild(clon);
});
