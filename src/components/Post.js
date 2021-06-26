import React from 'react'
import "./styles/Post.css"
export default function Post() {
    return (
        <div class="fondo" >
            <div class="perfil" >
                <div class="fotoperfil" >
                    <img src="https://i79.servimg.com/u/f79/20/31/61/88/fotope10.png" alt="" class="imagen" />
                </div>
                <div class="descripcion" >
                    <text class="nombre" >Yarriba Castro</text>
                    <text class="trabajo" >Design Track</text>
                    <text class="descripciones" >I chose design track because I love to design beautiful user-centered interfaces.</text>
                    <div class="redes" >
                        <img src="https://i79.servimg.com/u/f79/20/31/61/88/linked10.png" alt=""class="logolinked" />
                        <img src="https://i79.servimg.com/u/f79/20/31/61/88/instag10.png" alt=""class="logoInstagram" />
                        <text class="liked" >Yaretas24</text>
                        <text class="instagram">Yaretas24</text>
                    </div>
                </div>
            </div>
        </div>
    )
}