// deno-lint-ignore-file no-explicit-any
import {
  Router,
  Request,
  Response,
} from "https://deno.land/x/oak@v17.0.0/mod.ts";

const router: Router = new Router();

router.get(
  "/",
  ({ request, response }: { request: Request; response: Response }) => {
    try {
      // const url = request.url.searchParams.get("url") as string;
      // if (!url) {
      //   throw new Error("No url provided");
      // }
      // const result = await fetch(url, {
      //   method: "GET",
      //   headers: { "X-Requested-With": "XMLHttpRequest" },
      // });
      response.body = "Hello!, This is Cors proxy service.";
    } catch (err) {
      throw err;
    }
  }
);

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
      return (response.body = await result.json());
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
