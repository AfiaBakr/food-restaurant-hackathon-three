import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId :"9u7ngvzg",
  dataset :"production",
  apiVersion :"2021-10-21",
  useCdn: true,
  token:"sk936t7UlqwdUJzIPs31Wc3IDTjdE0j5I23CE0xJThdCfkpdkZMbNowmttvrZbdz6zXPftZCi4DJmWPS5XzkZqdCfdREJ5jsnBWqh7lEQt1krYcPXGphB55OLANjsYfzGk35QcNA7qaCwkdz6mVu0J1Up75bkvkZWkJsM8LRw4MxPS0hw3S0" // Set to false if statically generating pages, using ISR or tag-based revalidation
});