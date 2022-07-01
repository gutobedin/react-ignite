import { useState } from 'react'
import { Header } from './components/Header';
import { Post } from './Post'
import { Sidebar } from './components/Sidebar';

import './global.css';
import styles from './App.module.css'

export function App() {
  return (
    <div>
        <Header />

        <div className={styles.wrapper}>
          <Sidebar />
          <main>
          <Post
           author="Gustavo Bedin" 
           content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus dolore voluptates debitis magnam animi, quaerat repudiandae provident nihil numquam consectetur nemo sunt earum quasi quibusdam quisquam ducimus, alias quo. Quis!" 
        />

        <Post 
          author="Fernanda Zanella"
          content="Mais um post muito legal!"
        />
          </main>
        </div>
    </div>
    )

  }

