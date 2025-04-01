// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Isaacus from 'isaacus';
import { Tool } from '@modelcontextprotocol/sdk/types.js';

import create_classifications_universal from './classifications/universal/create-classifications-universal';
import create_rerankings from './rerankings/create-rerankings';

export const tools: Tool[] = [];

export type HandlerFunction = (client: Isaacus, args: any) => Promise<any>;
export const handlers: Record<string, HandlerFunction> = {};

function addEndpoint(endpoint: { tool: Tool; handler: HandlerFunction }) {
  tools.push(endpoint.tool);
  handlers[endpoint.tool.name] = endpoint.handler;
}

addEndpoint(create_classifications_universal);
addEndpoint(create_rerankings);
