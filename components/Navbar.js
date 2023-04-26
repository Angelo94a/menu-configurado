import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
const menu__list = [
	{ text: 'Inicio', href: '/' },
	{ text: 'Nosotros', href: '/about' },
	{ text: 'Contacto', href: '/contact' },
]

export default function Navbar() {
	const [navbar, setNavbar] = useState(false)
	return (
		<div>
			<header>
				<nav className={`nav`}>
					<Link href="#" legacyBehavior>
						<a>Logo</a>
					</Link>
					<div>
						<button
							className={`nav__bar ${navbar ? 'active' : ''}`}
							onClick={() => setNavbar(!navbar)}
						>
							<span className="bar"></span>
							<span className="bar"></span>
							<span className="bar"></span>
						</button>
					</div>
					<ul className={`nav__menu ${navbar ? 'active' : ''}`}>
						{menu__list.map(({ text, href }) => (
							<li key={href} className={`nav__item`}>
								<Link href={href} onClick={() => setNavbar(!navbar)}>
									{text}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			</header>
		</div>
	)
}
