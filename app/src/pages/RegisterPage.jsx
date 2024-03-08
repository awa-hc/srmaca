import { useState } from "react";
import Swal from "sweetalert2";

export default function RegisterPage() {
	const [fullname, setFullname] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmpassword, setConfirmpassword] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");
	const [setError] = useState(false);

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
					Swal.fire({
						icon: 'success',
						title: 'Exito!',
						text: 'Por favor, revise su bandeja de entrada en su correo.',
						showConfirmButton: false,
						timer: 5000,
					});
					// Redirigir al usuario a la página de inicio después de 5 segundos
					setTimeout(() => {
						window.location.href = "/";
					}, 5000);
				}
				if (data.error) {
					Swal.fire({
						icon: 'error',
						title: 'Disculpanos',
						text: 'Hubo error con el servicio.'
					});
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
