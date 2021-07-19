import Head from "next/head"
import { Footer } from "../components/Footer";
import { Header } from "../components/Header"
import { ShareNews } from "../components/ShareNews";
import { YourSpecialSelection } from "../components/YourSpecialSelection";

import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <h1>Ajude o algorítimo a ser mais certeiro</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque ultricies tellus nec mi porta convallis sollicitudin eu urna.
            Mauris rhoncus erat sed interdum dignissim. Suspendisse semper pretium consectetur.
            Praesent bibendum arcu risus, sit amet iaculis ex tempus quis. Cras et erat ut tellus vulputate tincidunt.
            Aenean lacinia euismod augue vel egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra.
            <br /><br />
            P       er inceptos himenaeos.Vestibulum vel urna tortor.Vivamus et arcu non felis tristique eleifend.
            Morbi eu condimentum urna.Curabitur eu magna eget turpis condimentum ultrices.
            Suspendisse quis lorem ultricies, pulvinar purus sed, egestas erat.
            Etiam ultricies a ante vehicula pharetra.Quisque ut neque mattis, consequat velit ut, ultrices orci.
            Nulla varius elementum erat vel pharetra.Aenean sit amet nisi diam.Morbi viverra,
            magna ac luctus commodo, odio ante suscipit libero, at mattis augue est vel metus.
          </p>
        </section>

        <form className={styles.formContainer}>
          < label htmlFor='name'>Seu nome</label>
          < input type='text' name='name' className={styles.inputField} />

          < label htmlFor='name'>E-mail</label>
          < input type='text' name='name' className={styles.inputField} />

          < label htmlFor='name'>CPF</label>
          < input type='text' name='name' className={styles.inputField} />

          <div className={styles.radioButton}>
            <div>
              <input className={styles.check} type="radio" value="Masculino" name="gender" /><span>Masculino</span>
            </div>
            <div>
              <input className={styles.check} type="radio" value="Feminino" name="gender" /><span>Feminino</span>
            </div>
          </div>
          <a className={styles.sendButton}>Enviar</a>
        </form>

      </main>

      <YourSpecialSelection />
      <ShareNews />
      <Footer />
    </>
  )
}
