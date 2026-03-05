import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Heavyweight Boxy Hoodie',
    price: 85.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxHmyf6Ak8stitpf_qC08Xu3A80u6t-ZJcCHFddLUQc0PQ_InuAQJIiy7BGRjS1tvbDz2eRHtP26DZs60386JBPyl_5xR0JSl2sBIvPUmaHk9YSC28hldYDHdWGcutZ7NADo7AQbarpiukt_IiOmItpfyK92pVPvrMYlxquq5WeGGqkIu3v0N9_oveJjCtVZuaxNtJTkatCzUqXf6PkxcZjK2LKSYGDVtcdx8nJc_y0ddajdaALNJmAdIGDJA3jX9X-kHXuD2Ia984',
    category: 'Hoodies',
    description: 'Engineered for ultimate comfort and enduring style. This premium hoodie is crafted from 450 GSM heavy-weight French Terry cotton. Featuring a structured fit, double-lined hood, and reinforced seams for a minimalist silhouette that stands the test of time.',
    colors: ['#0f172a', '#94a3b8', '#ffffff'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: '2',
    name: 'Tech Cargo Jacket',
    price: 145.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4kadFV9aX_pmpX1fqp92nilZHW00_0Omwq-nNiAZi_GVyK3fTHlthoeAVbMJjL7ZCGG5LX5FVtthnrnxTWXyb84u56YghVwD6zn-sOvvG4eQlYqZP2CuXvYatma1TWZwtXbwm3GW3PQi-tuyS21ybU97J6uNn5A09G3VcNtBCrvH3gNn28qX5zcIy4fr6s7UVsk-0NBWmVlqrM3-za9Tj1jEAOzgzLE7X9nIL5IWFVS5WAbpA7UveWVUtBLqLHUVeCZRI6wq_Ui6s',
    category: 'Jackets'
  },
  {
    id: '3',
    name: 'Minimalist Canvas Tote',
    price: 40.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSwiAcWBQ_RvlEsNFMntw742ZGynryghtrAA0AcsX-cUHkasmEw6kHfguzvfUUInF5naVbER1JwJ0W7PYbgY5K_5HQs22j9ahxewYSF1Ues8RSbAZNyR75PKiKoah2KNmOaaD12CCetSkF9pgZ925sOAhQuWatUDWVTOHy8vNutPYzIByEYPUKYCVC8CWqJDrfu457TkKzhBrvRqOknlBieAIu6JEAulI3Tw-mTofj306tN1iNilbBWIQowcJAWzxuOp9j7bh6RFS9',
    category: 'Accessories'
  },
  {
    id: '4',
    name: 'Ribbed Wool Beanie',
    price: 35.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDpAz9K7atMJOntAUVVzMq9huzsBJK-KTpxqvVtqdMX_pz2e0tqPEaV9zy_nn-UWf_sW3y6ZlZwwWlGUDMlT04ypqTpp60FDXW9hznfInvQU4dsmY24ZYRapuvnRNCL5i6Yz18nHPKnjtWVVlj4YBfQv27L4GDhNkNI6-kDKgpmkLjJH584uV818RFYe6_LyRXmZoDBnhMTSGVv7swTx_BxavnzHbVw1aQW8Pc6BfeSPU-MOKsWomvmxsOOiWt5BqPGcPEt55ZKjShM',
    category: 'Accessories'
  },
  {
    id: '5',
    name: 'Oversized Hoodie',
    price: 450.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBAWdiw3t8eagIfadNBLORg-w5LLEt-D4Uv741sfiNA5-yvkJDq_u9g7nK8LwB2uv-cs8wqJEfZLCaa0Gz7s81MXCfVFvUUV5Wrht9m83MjFJbtiqKMxpEq56CZEMGEZYO9sAIKkpHoCc8SctP8j9tkZK689W0uPJBT-zYT7ellkx0nvfXW8Nj-tVBnO5d2UKpqKNFT5dQqlo7qWjXFEL9S5j0wlXgFrVfErsOna5sxxez-cSv8bbi4FycFhrrGVjZxiHcKHd_2cZVu',
    category: 'Hoodies'
  },
  {
    id: '6',
    name: 'Tailored Wool Jacket',
    price: 1200.00,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCJY4qKYPOwrZ8EsA5fbPeR7mQ9P5I2KkmIDc8vYOsJ7knIeeg05HAWw3JAqAeDBJ9NlKUFN1sV98MGMnWyZ9B8QUG0eSz6GmM5FERtk1bEGepC1MZbF9Hq883mmOTmsf8AWdyaexsTBUbMnzTK35AQ_myhrofaHVGeJzZoNLczcVduFEUszijT--WauXNxKgWmyR0F0yDge03xRsvPNt4V1D9LBGMOLku935qFibVgVbvLgACX6xpULfXpGnkjayzOIg-Y929omYkq',
    category: 'Jackets'
  }
];

export const CATEGORIES = [
  { name: 'Hoodies', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWqSJyZ04_Fl64KBBoS1Qf3ePNNkZ5Rdu19Rqm3s701f2VvNfiEI6caz_Q8rQH64IEvmwYeJzMTsbsFVKIpCWOY2aMIptqvtqXOafNFevxWavVJtXtfeJEmIvU2ACQW0b3CXJvJ-81pqwK7hqABGjl4H0azEs6UdHYL0STwLI7jsm9w6wVjPxVujDaGk4XZr18U7ypVsW2aWREZwnw4LbCjrMEuTW5-P-hP35g0vpbEtrZOkkXhW_iXTAvmS59nmqFNKQ_GGe_Vn4K' },
  { name: 'Jackets', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBU9psC8Y7FhV4p1fDzW6y9W2L2H9AE5GcS3aDZmerJCYrUGp9RQfbisLbquttOmsjKjEyp7ysZubBfaFyHSlH05cXTHo_uJwShBB649M9gZ7X0VCI-mOKUz2AHg5bWt-HdwRW2_gHV0RzgS0EUxjjudM937gNVDc2uxWxQ0n7AmOqprYfKBMnEtv1oug3d6YlgKBradNADN4mtUg1VYsDSrkfjiHDyiigQiwmN-jH4pbWiaroy_hS7RNVXdLwUAGC0gYhf_e0B8UGF' },
  { name: 'Accessories', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADp5OtFCPOZDJOaSOO3K7ejUaxmaiC77bD-ihnT5MhQTiqYGwkGTWIMc_h5yolf_pb_DhaXjSx8I54jSXQVFUXhUzgD9HjGlkt44lLO_m9lIwa32gWQhZtnMi84SV7uiu0EDpDMhBHLDGjDPOp4MkI0qVw0x3ArhDbaoEf8XjtxrAOG5bxt710qkL0WybfpPc4nxBNSEbSZBmroiEoge4xao59_H1hxGbgdrQFWsZQcpluBiEuIYKdzERn1Wy5ruFCmRM2JEokkQTo' },
  { name: 'T-Shirts', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCo5c9Uxz9po8sRra6LKBf7u9tMYOS4J-AMxJ-AAFlqKYw2YrqpyN15KWXeIDhoWjUcNCmmmVRSf8TZ1JXl4vmpxkFuJ4eBD8TJygH9LE-Q-nzSscg45rAoFao7XMB9rV2JxyepuY1q7LOUwWge90KAuh48eevYcI8rN_Kd2haP7He3zfjD1ZkjLCo0Fna14hcYFrIzt6rfmpGXs-5eGvchU9CC7Oq6llGEWEkw5vK6buJ2KCVt5KQ5GTH9VBcQGfLy3zbK_KvhQCKl' }
];
