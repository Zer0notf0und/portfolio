// queries/getContactMe.ts
import datoCMSClient from './datoCMSClient';
import { ContactMe } from '../types';

const GET_CONTACT_ME = `
  query {
    contact  {
      profilepicture {
        url
      }
      name
      title
      summary
      companyuniversity
      linkedin
      email
      phonenumber
    }
  }
`;

export async function getContactMe(): Promise<ContactMe> {
  const data = await datoCMSClient.request<{ contact: ContactMe }>(GET_CONTACT_ME);
  return data.contact;
}
