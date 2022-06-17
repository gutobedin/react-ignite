import { useState } from 'react'
import { Header } from './components/Header';
import { Post } from './Post'
import './global.css';

export function App() {
  return (
    <div>
        <Header />

        <Post
           author="Gustavo Bedin" 
           content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus dolore voluptates debitis magnam animi, quaerat repudiandae provident nihil numquam consectetur nemo sunt earum quasi quibusdam quisquam ducimus, alias quo. Quis!" 
        />

        <Post 
          author="Fernanda Zanella"
          content="Mais um post muito legal!"
        />
    </div>
    )

  }

