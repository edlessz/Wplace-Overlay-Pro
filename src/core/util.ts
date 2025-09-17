export function uid() {
	return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

export function uniqueName(base: string, existing: string[]) {
	const names = new Set(existing.map((n) => (n || "").toLowerCase()));
	if (!names.has(base.toLowerCase())) return base;
	let i = 1;
	while (names.has(`${base} (${i})`.toLowerCase())) i++;
	return `${base} (${i})`;
}

export interface EV_ANCHOR_SET_Event {
	detail: {
		overlayId: string;
		name: string;
		chunk1: number;
		chunk2: number;
		posX: number;
		posY: number;
	};
}
