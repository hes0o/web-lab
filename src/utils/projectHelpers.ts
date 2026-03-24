import type { Project, Category, SortField, SortOrder } from "../types/project";

// 1. Filter by Search Query (Title, Description, or Tech) [cite: 1040, 1525]
export function filterBySearch(projects: Project[], query: string): Project[] {
    if (!query.trim()) return projects;
    const lower = query.toLowerCase();
    return projects.filter(p =>
        p.title.toLowerCase().includes(lower) ||
        p.description.toLowerCase().includes(lower) ||
        p.tech.some(t => t.toLowerCase().includes(lower))
    );
}

// 2. Filter by Category [cite: 1070]
export function filterByCategory(projects: Project[], category: Category | "all"): Project[] {
    if (category === "all") return projects;
    return projects.filter(p => p.category === category);
}

// 3. Sort Projects (by Year or Title) [cite: 1087]
export function sortProjects(projects: Project[], field: SortField, order: SortOrder): Project[] {
    const sorted = [...projects].sort((a, b) => {
        if (field === "year") {
            return a.year - b.year; // [cite: 1102]
        }
        return a.title.localeCompare(b.title, "tr"); // [cite: 1104]
    });
    return order === "desc" ? sorted.reverse() : sorted;
}

// 4. Combined Filter Function [cite: 1128]
export function applyFilters(
    projects: Project[],
    search: string,
    category: Category | "all",
    sortField: SortField,
    sortOrder: SortOrder
): Project[] {
    let result = filterBySearch(projects, search);
    result = filterByCategory(result, category);
    result = sortProjects(result, sortField, sortOrder);
    return result;
}