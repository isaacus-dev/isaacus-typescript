# Isaacus TypeScript MCP Server

It is generated with [Stainless](https://www.stainless.com/).

## Installation

### Via Claude Desktop

See [the user guide](https://modelcontextprotocol.io/quickstart/user) for setup.

Once it's set up, find your `claude_desktop_config.json` file:

- macOS: `~/Library/Application Support/Claude/claude_desktop_config.json`
- Windows: `%APPDATA%\Claude\claude_desktop_config.json`

Add the following value to your `mcpServers` section. Make sure to provide any necessary environment variables (like API keys) as well.

```json
{
  "mcpServers": {
    "isaacus_api": {
      "command": "npx",
      "args": ["-y", "isaacus-mcp"],
      "env": {
        "ISAACUS_API_KEY": "My API Key"
      }
    }
  }
}
```

## Filtering tools

You can run the package on the command line to discover and filter the set of tools that are exposed by the
MCP Server. This can be helpful for large APIs where including all endpoints at once is too much for your AI's
context window.

You can filter by multiple aspects:

- `--tool` includes a specific tool by name
- `--resource` includes all tools under a specific resource, and can have wildcards, e.g. `my.resource*`
- `--operation` includes just read (get/list) or just write operations

See more information with `--help`:

```sh
$ npx -y isaacus-mcp --help
```

All of these command-line options can be repeated, combined together, and have corresponding exclusion versions (e.g. `--no-tool`).

Use `--list` to see the list of available tools, or see below.

## Available Tools

The following tools are available in this MCP server.

### Resource `classifications.universal`:

- `create_classifications_universal` (`write`): Classify the relevance of a legal document to a query with an Isaacus universal legal AI classifier.

### Resource `rerankings`:

- `create_rerankings` (`write`): Rerank legal documents by their relevance to a query with an Isaacus legal AI reranker.
