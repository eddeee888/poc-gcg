import type { DocumentNode } from "graphql";
export const typeDefs = {
  kind: "Document",
  definitions: [
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Query", loc: { start: 5, end: 10 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 0, end: 10 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Mutation", loc: { start: 17, end: 25 } },
      interfaces: [],
      directives: [],
      fields: [],
      loc: { start: 12, end: 25 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "PayloadError",
        loc: { start: 32, end: 44 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "error", loc: { start: 49, end: 54 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "PayloadErrorType",
                loc: { start: 56, end: 72 },
              },
              loc: { start: 56, end: 72 },
            },
            loc: { start: 56, end: 73 },
          },
          directives: [],
          loc: { start: 49, end: 73 },
        },
      ],
      loc: { start: 27, end: 75 },
    },
    {
      kind: "EnumTypeDefinition",
      name: {
        kind: "Name",
        value: "PayloadErrorType",
        loc: { start: 82, end: 98 },
      },
      directives: [],
      values: [
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "NOT_FOUND",
            loc: { start: 103, end: 112 },
          },
          directives: [],
          loc: { start: 103, end: 112 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "INPUT_VALIDATION_ERROR",
            loc: { start: 115, end: 137 },
          },
          directives: [],
          loc: { start: 115, end: 137 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "FORBIDDEN_ERROR",
            loc: { start: 140, end: 155 },
          },
          directives: [],
          loc: { start: 140, end: 155 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "UNEXPECTED_ERROR",
            loc: { start: 158, end: 174 },
          },
          directives: [],
          loc: { start: 158, end: 174 },
        },
      ],
      loc: { start: 77, end: 176 },
    },
    {
      kind: "ScalarTypeDefinition",
      name: { kind: "Name", value: "DateTime", loc: { start: 185, end: 193 } },
      directives: [],
      loc: { start: 178, end: 193 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 206, end: 211 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "book", loc: { start: 216, end: 220 } },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 221, end: 223 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 225, end: 227 },
                  },
                  loc: { start: 225, end: 227 },
                },
                loc: { start: 225, end: 228 },
              },
              directives: [],
              loc: { start: 221, end: 228 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "BookPayload",
                loc: { start: 231, end: 242 },
              },
              loc: { start: 231, end: 242 },
            },
            loc: { start: 231, end: 243 },
          },
          directives: [],
          loc: { start: 216, end: 243 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "readable",
            loc: { start: 246, end: 254 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 255, end: 257 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 259, end: 261 },
                  },
                  loc: { start: 259, end: 261 },
                },
                loc: { start: 259, end: 262 },
              },
              directives: [],
              loc: { start: 255, end: 262 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Readable",
              loc: { start: 265, end: 273 },
            },
            loc: { start: 265, end: 273 },
          },
          directives: [],
          loc: { start: 246, end: 273 },
        },
      ],
      loc: { start: 194, end: 275 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Book", loc: { start: 282, end: 286 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 291, end: 293 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 295, end: 297 },
              },
              loc: { start: 295, end: 297 },
            },
            loc: { start: 295, end: 298 },
          },
          directives: [],
          loc: { start: 291, end: 298 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "isbn", loc: { start: 301, end: 305 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 307, end: 313 },
              },
              loc: { start: 307, end: 313 },
            },
            loc: { start: 307, end: 314 },
          },
          directives: [],
          loc: { start: 301, end: 314 },
        },
      ],
      loc: { start: 277, end: 316 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "BookResult",
        loc: { start: 323, end: 333 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "result",
            loc: { start: 338, end: 344 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Book",
              loc: { start: 346, end: 350 },
            },
            loc: { start: 346, end: 350 },
          },
          directives: [],
          loc: { start: 338, end: 350 },
        },
      ],
      loc: { start: 318, end: 352 },
    },
    {
      kind: "UnionTypeDefinition",
      name: {
        kind: "Name",
        value: "BookPayload",
        loc: { start: 360, end: 371 },
      },
      directives: [],
      types: [
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "BookResult",
            loc: { start: 374, end: 384 },
          },
          loc: { start: 374, end: 384 },
        },
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "PayloadError",
            loc: { start: 387, end: 399 },
          },
          loc: { start: 387, end: 399 },
        },
      ],
      loc: { start: 354, end: 399 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ShortNovel",
        loc: { start: 406, end: 416 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 421, end: 423 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 425, end: 427 },
              },
              loc: { start: 425, end: 427 },
            },
            loc: { start: 425, end: 428 },
          },
          directives: [],
          loc: { start: 421, end: 428 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "summary",
            loc: { start: 431, end: 438 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 440, end: 446 },
              },
              loc: { start: 440, end: 446 },
            },
            loc: { start: 440, end: 447 },
          },
          directives: [],
          loc: { start: 431, end: 447 },
        },
      ],
      loc: { start: 401, end: 449 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Magazine", loc: { start: 456, end: 464 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 469, end: 471 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 473, end: 475 },
              },
              loc: { start: 473, end: 475 },
            },
            loc: { start: 473, end: 476 },
          },
          directives: [],
          loc: { start: 469, end: 476 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "issueNumber",
            loc: { start: 479, end: 490 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 492, end: 495 },
              },
              loc: { start: 492, end: 495 },
            },
            loc: { start: 492, end: 496 },
          },
          directives: [],
          loc: { start: 479, end: 496 },
        },
      ],
      loc: { start: 451, end: 498 },
    },
    {
      kind: "UnionTypeDefinition",
      name: { kind: "Name", value: "Readable", loc: { start: 506, end: 514 } },
      directives: [],
      types: [
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "ShortNovel",
            loc: { start: 517, end: 527 },
          },
          loc: { start: 517, end: 527 },
        },
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "Magazine",
            loc: { start: 530, end: 538 },
          },
          loc: { start: 530, end: 538 },
        },
      ],
      loc: { start: 500, end: 538 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 551, end: 556 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "user", loc: { start: 561, end: 565 } },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 566, end: 568 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 570, end: 572 },
                  },
                  loc: { start: 570, end: 572 },
                },
                loc: { start: 570, end: 573 },
              },
              directives: [],
              loc: { start: 566, end: 573 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 576, end: 580 },
            },
            loc: { start: 576, end: 580 },
          },
          directives: [],
          loc: { start: 561, end: 580 },
        },
      ],
      loc: { start: 539, end: 582 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "User", loc: { start: 589, end: 593 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 598, end: 600 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 602, end: 604 },
              },
              loc: { start: 602, end: 604 },
            },
            loc: { start: 602, end: 605 },
          },
          directives: [],
          loc: { start: 598, end: 605 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "fullName",
            loc: { start: 608, end: 616 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 618, end: 624 },
              },
              loc: { start: 618, end: 624 },
            },
            loc: { start: 618, end: 625 },
          },
          directives: [],
          loc: { start: 608, end: 625 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "booksRead",
            loc: { start: 628, end: 637 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "ListType",
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "Book",
                    loc: { start: 640, end: 644 },
                  },
                  loc: { start: 640, end: 644 },
                },
                loc: { start: 640, end: 645 },
              },
              loc: { start: 639, end: 646 },
            },
            loc: { start: 639, end: 647 },
          },
          directives: [],
          loc: { start: 628, end: 647 },
        },
      ],
      loc: { start: 584, end: 649 },
    },
  ],
  loc: { start: 0, end: 650 },
} as unknown as DocumentNode;
