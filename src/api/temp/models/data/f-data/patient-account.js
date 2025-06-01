const patientAccountsFakeData = [
  {
    id: 1,
    patientId: 1,
    password: '$2b$10$kJv8N1X7v9jMtiF.R7a1xOZkEUEXq.ZZVv0k7.ZNyZZdJ34Qhp1F6' // hashed password giả
  },
  {
    id: 2,
    patientId: 2,
    password: '$2b$10$zT7nNpLdJ3OeHxV5Ed6vUuVcYh4jPxYbN0/ZOrJ27h/XM.Hl6rDLe'
  },
  {
    id: 3,
    patientId: 3,
    password: '$2b$10$A8d/9cZplF3bY4sx7f4M6u0GVpjo5VztGxMlkFpnM7tL9XbHRA8iq'
  },
  {
    id: 4,
    patientId: 4,
    password: '$2b$10$3vKQh4Po67xP7r7Bhd0a8uH7XgIQ5TXYL0uOwXXyG1TuyW5qPhP3C'
  },
  {
    id: 5,
    patientId: 5,
    password: '$2b$10$ErKLxEyJ7bNQknmjM8DQOuy2b5hRfhjR1OMr4IxntW4roMZ4P9q8K'
  },
  {
    id: 6,
    patientId: 6,
    password: '$2b$10$R1QDvF7VPkl7k0ouWTH1/OqFjJTHIKXHlZTTCFOQyAUbFQm1y96AO'
  },
  {
    id: 7,
    patientId: 7,
    password: '$2b$10$B8FjGTaKhNRtgkYZKZMiIuHtTYSvxg/oGjML9Hd8P6lChtbMvKrwG'
  },
  {
    id: 8,
    patientId: 8,
    password: '$2b$10$v6bRp/BkrM.zlO9qeFfLnO9CXj5PbURj5ScFiV1Z4ewJsOyxIh7Oe'
  },
  {
    id: 9,
    patientId: 9,
    password: '$2b$10$47XG2r3r5C6v/EW87KU8VuUuJXqK5jlD02zzQ8VjLxRcH9qJoBo9K'
  },
  {
    id: 10,
    patientId: 10,
    password: '$2b$10$x6QJNnqWjAlHj4D83/Hnu.XRrYb0c6x4zXoDbS5RO4qZhjRk7iMea'
  },
  {
    id: 11,
    patientId: 11,
    password: '$2b$10$4zRbIUV8s6i5XokU4k8w9.1vJ1B1rDkmZiVvDpEmPObGZc4pTjW2m'
  },
  {
    id: 12,
    patientId: 12,
    password: '$2b$10$jKT1tJtiB9b9YjMwYKOG6eC77knCQcUq4C6HuZ/yCWTZ3KqZx7VtW'
  },
  {
    id: 13,
    patientId: 13,
    password: '$2b$10$dK7Hx0A2nEjZOGzQmTYXy.G0xlc6NH2D60L/w9PdRO9uC3m/TwTke'
  },
  {
    id: 14,
    patientId: 14,
    password: '$2b$10$8clOTx8PqFkX9Kcdztv3qe1Ht6hvXiPaLWkhz/b7GpbUuQ/M1lLuy'
  },
  {
    id: 15,
    patientId: 15,
    password: '$2b$10$ZTQWRFZRU96UOw09X1OvHuF2JdPyUcqJ6M5B4cNxWCHVfFr/MCXMi'
  }, {
    id: 16,
    patientId: 16,
    password: '$2b$10$GmTjzWlkNjROJl9rSqGkEeBnzYtOcRE1pVnUQkVXhHlEcmHZOIVNu'
  },
  {
    id: 17,
    patientId: 17,
    password: '$2b$10$UxHg9RpuWjUhk6eWvXvN7O0gCYyoc0XtOlN0Q/f6v6o2C2WQZK8Me'
  },
  {
    id: 18,
    patientId: 18,
    password: '$2b$10$Odh3JYRHtPp/Q9A5mkK6QO.vjxTVNgxK3tE7Fb0rSjM.CLOe4nGx6'
  },
  {
    id: 19,
    patientId: 19,
    password: '$2b$10$5C8mx3WFaEaGxEwRO8O3NOfhrlQUu9W/9FXe0QqgF/0V.1xAMkY8y'
  },
  {
    id: 20,
    patientId: 20,
    password: '$2b$10$PQb7E1XkOqMSq2N8pDdlMOqv8fNjk3OqZyqEC4ZLvJ8VhzBdiFDK6'
  },
  {
    id: 21,
    patientId: 21,
    password: '$2b$10$P6fEz03/x0ckka1x6W/NhO27nQujpsQifWYnqRAUqnr7pJUMZBtq2'
  },
  {
    id: 22,
    patientId: 22,
    password: '$2b$10$y9E8n4BZoOacUOYiWglLX.hTf7Aj2SGlKmt7J/gFEjG6NtgTRpbBu'
  },
  {
    id: 23,
    patientId: 23,
    password: '$2b$10$jhyvujyKxEmnT5lj1vbnJupNVV7L7GTH0h4tvXZUKoIQPEEjDdFQe'
  },
  {
    id: 24,
    patientId: 24,
    password: '$2b$10$w7s5J3XKDjQ1cEoF7QWm1uLZz7WOLqLx6x1pJqFYRx7fWUpu7wqa6'
  },
  {
    id: 25,
    patientId: 25,
    password: '$2b$10$McTN5MRA8kLn3aEfDh0KZOuLWv7qlEr1WUpJJpK.ZD3HOK5bFMhpe'
  }, {
    id: 26,
    patientId: 26,
    password: '$2b$10$8Ybv1OtMrzBzZz1X3E9jUeG4kF5a0MprTF5l7hvPdYOqE2JtH5L4m'
  },
  {
    id: 27,
    patientId: 27,
    password: '$2b$10$hN1v5JuqTLrVq42xC6dDZeQXB4xL9KwWm87hxZebChX6ZExmFhWMe'
  },
  {
    id: 28,
    patientId: 28,
    password: '$2b$10$Z8XfgB3KJtHjs5Wn8PYxaOQXcWj7LB3Pt6KlzEY3RsR0DpCzI4PSm'
  },
  {
    id: 29,
    patientId: 29,
    password: '$2b$10$UjWvX7sOYcyh7XplVZiTXuFgXs6pAMRkuQ1WtWITz2HY.XTHO5BYe'
  },
  {
    id: 30,
    patientId: 30,
    password: '$2b$10$L4Ks9XjNc3Dd57EKtwUfqOC9JjHTqHxWwVbW5TqIqIVxWptT8qv3a'
  },
  {
    id: 31,
    patientId: 31,
    password: '$2b$10$YrFP9xTXgXoIgLY0xHZypOJ3yVk8FoXGVGyzWeFdrq7RV7Cy5ikp6'
  },
  {
    id: 32,
    patientId: 32,
    password: '$2b$10$s36HCPB76gO1f6dy1HRB/OeVcj/tFev2x2rmcOsKlyCqvh9pZuqQK'
  },
  {
    id: 33,
    patientId: 33,
    password: '$2b$10$VCEcFSKmfT1dRhUbJqWlKuRmUtgnpJzDrDjs4ueMx9n6fZq1cPeIu'
  },
  {
    id: 34,
    patientId: 34,
    password: '$2b$10$MTEVZgqwrRg6Ny9zA/wwguM1z2ok56DqFZq9xR0P8zPvtNj0mWHi6'
  },
  {
    id: 35,
    patientId: 35,
    password: '$2b$10$4vRMktgVa97fr1/iOu1voOWm9yvyHEtpBYu56ImPIPJ7qa7mCvI7W'
  }
];

module.exports = patientAccountsFakeData;
