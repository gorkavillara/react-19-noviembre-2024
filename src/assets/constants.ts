import type { LinkElement, Product, User } from "../types"

const wordsArray = [
  "react",
  "typescript",
  "javascript",
  "html",
  "css",
  "frontend",
  "backend",
  "component",
  "state",
  "props",
  "hook",
  "useEffect",
  "useState",
  "API",
  "npm",
  "node",
  "express",
  "router",
  "typescript",
  "asynchronous",
  "json",
  "jsx",
  "tsx",
  "render",
  "promise",
  "event",
  "function",
  "context",
  "module",
  "babel",
  "var",
  "realsociedad",
  "barça",
  "lewandoski",
]

const totalTime = 10

export { wordsArray, totalTime }

export const links: LinkElement[] = [
  // {
  //   name: "Contacto",
  //   url: "/contact",
  // },
  // {
  //   name: "About",
  //   url: "/about",
  // },
  {
    name: "Users",
    url: "/users",
  },
  {
    name: "Products",
    url: "/products",
  },
  // {
  //   name: "Redireccion",
  //   url: "/redirect"
  // },
  {
    name: "Access",
    url: "/access"
  }
]

export const users: User[] = [
  {
    id: "0e41bb96-282d-4322-81de-fa202738c387",
    username: "John Doe",
    email: "john.doe@example.com",
    isDeveloper: true,
    password: "123123",
  },
  {
    id: "7b6ee163-df07-4dbd-bd49-36fc4b8c2dfa",
    username: "Jane Smith",
    email: "jane.smith@example.com",
    isDeveloper: true,
    password: "123123",
  },
  {
    id: "b765ba4b-af4a-4b27-8de3-c07002fb7f38",
    username: "Alice Johnson",
    email: "alice.johnson@example.com",
    isDeveloper: true,
    password: "123123",
  },
  {
    id: "948e2fd1-766c-44d1-9cd3-eeb753325f61",
    username: "Bob Brown",
    email: "bob.brown@example.com",
    isDeveloper: true,
    password: "123123",
  },
  {
    id: "fac4e935-115c-4654-8e3d-764adaa584fc",
    username: "Charlie Davis",
    email: "charlie.davis@example.com",
    isDeveloper: true,
    password: "123123",
  },
]

export const products: Product[] = [
  {
    id: "1a2b3c4d-5678-90ab-cdef-1234567890ab",
    name: "Product 1",
    price: 29.99,
  },
  {
    id: "2b3c4d5e-6789-01bc-def2-3456789012cd",
    name: "Product 2",
    price: 49.99,
  },
  {
    id: "3c4d5e6f-7890-12cd-ef34-5678901234de",
    name: "Product 3",
    price: 19.99,
  },
  {
    id: "4d5e6f7g-8901-23de-f456-7890123456ef",
    name: "Product 4",
    price: 99.99,
  },
  {
    id: "5e6f7g8h-9012-34ef-5678-9012345678fg",
    name: "Product 5",
    price: 9.99,
  }
]
