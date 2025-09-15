// src/queries/getProjects.ts
import datoCMSClient from './datoCMSClient';
import { Project } from '../types';

// The query is corrected from "Project" to "allProjects"
// to ensure it returns an array.
const GET_PROJECTS = `
  query {
    allProjects(orderBy: title_ASC) {
      title
      description
      techused
      image {
        url
      }
    }
  }
`;

export async function getProjects(): Promise<Project[]> {
  const data = await datoCMSClient.request<{ allProjects: Project[] }>(GET_PROJECTS);
  // Now, data.allProjects will be an array, preventing the error.
  return data.allProjects;
}