// deno-lint-ignore-file no-explicit-any
import { Request } from "jsr:@oak/oak/request";
import { Response } from "jsr:@oak/oak/response";
import { Router } from "jsr:@oak/oak/router";

const router: Router = new Router();

router.get(
  "/forward",
  async ({ request, response }: { request: Request; response: Response }) => {
    try {
      const url = request.url.searchParams.get("url") as string;
      if (!url) {
        throw new Error("No url provided");
      }
      const result = await fetch(url, {
        method: "GET",
        headers: { "X-Requested-With": "XMLHttpRequest" },
      });
      response.body = await result.json();
    } catch (err) {
      throw err;
    }
  }
);

router.post(
  "/forward",
  async ({ request, response }: { request: Request; response: Response }) => {
    try {
      const url = request.url.searchParams.get("url") as string;
      if (!url) {        
        throw new Error("No url provided");
      }
      const body = JSON.stringify(request.body);
      const result = await fetch(url, {
        method: "POST",
        body,
        headers: {
          "X-Requested-With": "XMLHttpRequest",
        },
      });
      return response.body = await result.json();
    } catch (err: any) {
      throw err;
    }
  }
);

router.patch(
  "/forward",
  async ({ request, response }: { request: Request; response: Response }) => {
    try {
      const url = request.url.searchParams.get("url") as string;
      if (!url) {
        throw new Error("No url provided");
      }
      const body = JSON.stringify(request.body);
      const result = await fetch(url, {
        method: "Patch",
        body,
        headers: {
          "X-Requested-With": "XMLHttpRequest",
        },
      });
      response.body = await result.json();
    } catch (err: any) {
      throw err;
    }
  }
);

router.delete(
  "/forward",
  async ({ request, response }: { request: Request; response: Response }) => {
    try {
      const url = request.url.searchParams.get("url") as string;
      if (!url) {
        throw new Error("No url provided");
      }
      const body = JSON.stringify(request.body);
      const result = await fetch(url, {
        method: "DELETE",
        body,
        headers: {
          "X-Requested-With": "XMLHttpRequest",
        },
      });
      response.body = await result.json();
    } catch (err: any) {
      throw err;
    }
  }
);

router.put(
  "/forward",
  async ({ request, response }: { request: Request; response: Response }) => {
    try {
      const url = request.url.searchParams.get("url") as string;
      if (!url) {
        throw new Error("No url provided");
      }
      const body = JSON.stringify(request.body);
      const result = await fetch(url, {
        method: "PUT",
        body,
        headers: {
          "X-Requested-With": "XMLHttpRequest",
        },
      });
      response.body = await result.json();
    } catch (err: any) {
      throw err;
    }
  }
);

export { router };
