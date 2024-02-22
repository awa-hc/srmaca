import { useState } from "react";
export default function RegisterPage() {
	const [fullname, setFullname] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmpassword, setConfirmpassword] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");
	const [error, setError] = useState(false);
	const [message, setMessage] = useState("");

function register(event) {
    event.preventDefault(); // Prevenir la recarga de la página
    if (password !== confirmpassword) {
		setError("Las contraseñas no coinciden");
		return;
    }
    if (password.length < 8) {
		setError("La contraseña debe tener al menos 8 caracteres");
		return;
    }
    if (address.length < 1) {
		setError("La dirección no puede estar vacía");
		return;
    }

    fetch("https://srmacaback.fly.dev/auth/signup", {
		method: "POST",
		headers: {
        "Content-Type": "application/json",
		},
		body: JSON.stringify({
			fullname: fullname,
			email: email,
			password: password,
			confirmpassword: confirmpassword,
			phone: phone,
			address: address,
    	}),
    })
    	.then((response) => response.json())
    	.then((data) => {
        if (data.message) {
			setMessage(data.message);
			setTimeout(() => {
				window.location.href = "/";
			}, 4000);
			}
			if (data.error) {
			setError(data.error);
			}
			console.log(data);
		})
		.catch((error) => {
			console.error(error);
		});
}

	return (
		<div className="pt-20 md:pt-0 min-h-screen bg-gradient-to-br from-[#185B69] to-black flex flex-col justify-center items-center text-white" style={{paddingTop: '5.5rem'}}>
		<section className="text-2xl font-bold">
			Unete a la fuerza de SrMaca!
		</section>
		<h1 className="text-xls">Registro de usuario</h1>
		{message ? (
			<div className="backdrop-blur-md px-4 text-white italic absolute h-screen w-screen flex flex-col justify-center items-center text-lg py-2 rounded-lg text-center">
			<div className="bg-green-500/45 w-max px-4 py-2 text-center rounded-lg">
				<h1>Exito!</h1>
				<h2>{message}</h2>
				<h3>Redireccionando...</h3>
			</div>
			</div>
		) : (
			<div className=""></div>
		)}

		{error ? (
			<div className="bg-red-500 px-4 py-2 text-center text-white rounded-lg">
			<h1>Error:</h1>
			<h3>{error}</h3>
			</div>
		) : (
			<div className=""></div>
		)}

		<form
			className="flex flex-col items-center justify-center [&>div>input]:bg-transparent"
			onSubmit={register}
		>
			<div className="flex flex-col mb-4">
			<label htmlFor="fullname" className="text-white mb-1">
				Nombre Completo
			</label>
			<input
				type="text"
				id="fullname"
				value={fullname}
				onChange={(event) => setFullname(event.target.value)}
				name="fullname"
				className="p-2 border border-white rounded-md focus:outline-none focus:border-blue-300"
			/>
			</div>
			<div className="flex flex-col mb-4">
			<label htmlFor="email" className="text-white mb-1">
				Correo Electrónico
			</label>
			<input
				type="text"
				id="email"
				value={email}
				onChange={(event) => setEmail(event.target.value)}
				name="email"
				className="p-2 border border-white rounded-md focus:outline-none focus:border-blue-300"
			/>
			</div>
			<div className="flex flex-col mb-4">
			<label htmlFor="password" className="text-white mb-1">
				Contraseña
			</label>
			<input
				type="password"
				id="password"
				value={password}
				onChange={(event) => setPassword(event.target.value)}
				name="password"
				className="p-2 border border-white rounded-md focus:outline-none focus:border-blue-300"
			/>
			</div>
			<div className="flex flex-col mb-4">
			<label htmlFor="confirmpassword" className="text-white mb-1">
				Confirmar Contraseña
			</label>
			<input
				type="password"
				id="confirmpassword"
				value={confirmpassword}
				onChange={(event) => setConfirmpassword(event.target.value)}
				name="confirmpassword"
				className="p-2 border border-white rounded-md focus:outline-none focus:border-blue-300"
			/>
			</div>
			<div className="flex flex-col mb-4">
			<label htmlFor="phone" className="text-white mb-1">
				Teléfono
			</label>
			<input
				type="phone"
				id="phone"
				value={phone}
				onChange={(event) => setPhone(event.target.value)}
				name="phone"
				className="p-2 border border-white rounded-md focus:outline-none focus:border-blue-300"
			/>
			</div>
			<div className="flex flex-col mb-4">
			<label htmlFor="address" className="text-white mb-1">
				Dirección
			</label>
			<input
				type="text"
				id="address"
				value={address}
				onChange={(event) => setAddress(event.target.value)}
				name="address"
				className="p-2 border border-white rounded-md focus:outline-none focus:border-blue-300"
			/>
			</div>
			<button
			type="submit"
			id="registerButton"
			className="bg-[#294437] text-white border-0 py-2 px-6 focus:outline-none hover:bg-white hover:text-[#294437] transition-colors ease-in-out duration-300 delay-100 rounded"
			style={{marginBottom: '1.5rem'}}
			>
			Registrarse
			</button>
		</form>
		</div>
	);
}
