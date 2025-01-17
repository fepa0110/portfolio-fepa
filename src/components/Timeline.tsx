export interface Fecha {
	fecha: String;
	titulo: String;
	descripcion: String;
}

interface TimelineProps {
	fechas: Fecha[];
}

export const Timeline = ({ fechas }: TimelineProps) => {
	return (
		<ol className="relative border-s-2 border-red-700">
			{fechas.map((fecha) => {
				return (
					<li className="mb-10 ms-4">
						<div className="absolute w-3 h-3 bg-red-700 rounded-full mt-1.5 -start-1.5 border border-red-700  hover:scale-125 transition-all"></div>
						<time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
							{fecha.fecha}
						</time>
						<h3 className="text-lg font-semibold text-white">
							{fecha.titulo}
						</h3>
						<p className="mb-4 text-base font-normal text-cyan-700">
							{fecha.descripcion}
						</p>
					</li>
				);
			})}
		</ol>
	);
};
