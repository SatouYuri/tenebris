import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import styles from "./styles.module.css"

export default function Navbar(): JSX.Element {
	const [menuOpen, setMenuOpen] = useState<boolean>(false);

	return (
		<>
			<div className={styles.bar}>
				<img className={styles.logo} src="/assets/images/logo/logo125.png" />
				<FontAwesomeIcon className={styles.menuIcon} icon={faBars} onClick={() => {setMenuOpen(!menuOpen)}}/>
			</div>
			{
			menuOpen ? 
				<div className={styles.menu}>
					<div className={[styles.option, styles.login].join(' ')}>Introdução</div>
					<div className={[styles.option, styles.login].join(' ')}>Objetivo</div>
					<div className={[styles.option, styles.login].join(' ')}>Como usar</div>
					<div className={styles.submenu}>
						<div className={[styles.option, styles.login].join(' ')}>Login</div>
						<div className={[styles.option, styles.register].join(' ')}>Cadastro</div>
					</div>
				</div>
				:
				null 
			}
		</>
	);
}