import type { Formacion } from "../types/Formacion";

interface TimelineProps {
	formaciones: Formacion[];
}

export const Timeline = ({ formaciones }: TimelineProps) => {
	return (
		<ol className="relative border-s-2 border-cyan-600">
			{formaciones.map((formacion) => {
				return (
					<li className="mb-10 ms-4" key={"fecha"+formacion.titulo}>
						<div className="absolute w-3 h-3 bg-cyan-600 rounded-full mt-1.5 -start-1.5 border border-cyan-600  hover:scale-125 transition-all"></div>
						<time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
							{formacion.fecha}
						</time>
						<h3 className="text-lg font-semibold text-white">
							{formacion.titulo}
						</h3>
						<p className="mb-4 text-base font-normal text-cyan-700">
							{formacion.institucion}
						</p>
					</li>
				);
			})}
		</ol>
	);
};
