import type { Project } from "../types/project";

const API_URL = "/data/projects.json";

export async function fetchProjects(): Promise<Project[]> {
    try {
        const response = await fetch(API_URL); // [cite: 214]

        // Always check if the HTTP request was successful [cite: 216, 431]
        if (!response.ok) {
            throw new Error(`Projeler yuklenemedi: ${response.status}`); // [cite: 1008]
        }

        const data: Project[] = await response.json(); // [cite: 231, 1016]
        return data;
    } catch (error) {
        // Log the error and pass it up to be handled by the UI [cite: 1027, 1028]
        console.error("Veri cekme hatasi:", error);
        throw error;
    }
}