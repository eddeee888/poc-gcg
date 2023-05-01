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
      name: {
        kind: "Name",
        value: "PayloadError",
        loc: { start: 17, end: 29 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "error", loc: { start: 34, end: 39 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "PayloadErrorType",
                loc: { start: 41, end: 57 },
              },
              loc: { start: 41, end: 57 },
            },
            loc: { start: 41, end: 58 },
          },
          directives: [],
          loc: { start: 34, end: 58 },
        },
      ],
      loc: { start: 12, end: 60 },
    },
    {
      kind: "EnumTypeDefinition",
      name: {
        kind: "Name",
        value: "PayloadErrorType",
        loc: { start: 67, end: 83 },
      },
      directives: [],
      values: [
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "NOT_FOUND",
            loc: { start: 88, end: 97 },
          },
          directives: [],
          loc: { start: 88, end: 97 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "INPUT_VALIDATION_ERROR",
            loc: { start: 100, end: 122 },
          },
          directives: [],
          loc: { start: 100, end: 122 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "FORBIDDEN_ERROR",
            loc: { start: 125, end: 140 },
          },
          directives: [],
          loc: { start: 125, end: 140 },
        },
        {
          kind: "EnumValueDefinition",
          name: {
            kind: "Name",
            value: "UNEXPECTED_ERROR",
            loc: { start: 143, end: 159 },
          },
          directives: [],
          loc: { start: 143, end: 159 },
        },
      ],
      loc: { start: 62, end: 161 },
    },
    {
      kind: "ScalarTypeDefinition",
      name: { kind: "Name", value: "DateTime", loc: { start: 170, end: 178 } },
      directives: [],
      loc: { start: 163, end: 178 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 191, end: 196 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "book", loc: { start: 201, end: 205 } },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 206, end: 208 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 210, end: 212 },
                  },
                  loc: { start: 210, end: 212 },
                },
                loc: { start: 210, end: 213 },
              },
              directives: [],
              loc: { start: 206, end: 213 },
            },
          ],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "BookPayload",
                loc: { start: 216, end: 227 },
              },
              loc: { start: 216, end: 227 },
            },
            loc: { start: 216, end: 228 },
          },
          directives: [],
          loc: { start: 201, end: 228 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "readable",
            loc: { start: 231, end: 239 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 240, end: 242 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 244, end: 246 },
                  },
                  loc: { start: 244, end: 246 },
                },
                loc: { start: 244, end: 247 },
              },
              directives: [],
              loc: { start: 240, end: 247 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Readable",
              loc: { start: 250, end: 258 },
            },
            loc: { start: 250, end: 258 },
          },
          directives: [],
          loc: { start: 231, end: 258 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "shortNovel",
            loc: { start: 261, end: 271 },
          },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "inputDateTime",
                loc: { start: 272, end: 285 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "DateTime",
                    loc: { start: 287, end: 295 },
                  },
                  loc: { start: 287, end: 295 },
                },
                loc: { start: 287, end: 296 },
              },
              directives: [],
              loc: { start: 272, end: 296 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "ShortNovel",
              loc: { start: 299, end: 309 },
            },
            loc: { start: 299, end: 309 },
          },
          directives: [],
          loc: { start: 261, end: 309 },
        },
      ],
      loc: { start: 179, end: 311 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Book", loc: { start: 318, end: 322 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 327, end: 329 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 331, end: 333 },
              },
              loc: { start: 331, end: 333 },
            },
            loc: { start: 331, end: 334 },
          },
          directives: [],
          loc: { start: 327, end: 334 },
        },
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "isbn", loc: { start: 337, end: 341 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 343, end: 349 },
              },
              loc: { start: 343, end: 349 },
            },
            loc: { start: 343, end: 350 },
          },
          directives: [],
          loc: { start: 337, end: 350 },
        },
      ],
      loc: { start: 313, end: 352 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "BookResult",
        loc: { start: 359, end: 369 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "result",
            loc: { start: 374, end: 380 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "Book",
              loc: { start: 382, end: 386 },
            },
            loc: { start: 382, end: 386 },
          },
          directives: [],
          loc: { start: 374, end: 386 },
        },
      ],
      loc: { start: 354, end: 388 },
    },
    {
      kind: "UnionTypeDefinition",
      name: {
        kind: "Name",
        value: "BookPayload",
        loc: { start: 396, end: 407 },
      },
      directives: [],
      types: [
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "BookResult",
            loc: { start: 410, end: 420 },
          },
          loc: { start: 410, end: 420 },
        },
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "PayloadError",
            loc: { start: 423, end: 435 },
          },
          loc: { start: 423, end: 435 },
        },
      ],
      loc: { start: 390, end: 435 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: {
        kind: "Name",
        value: "ShortNovel",
        loc: { start: 442, end: 452 },
      },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 457, end: 459 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 461, end: 463 },
              },
              loc: { start: 461, end: 463 },
            },
            loc: { start: 461, end: 464 },
          },
          directives: [],
          loc: { start: 457, end: 464 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "summary",
            loc: { start: 467, end: 474 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 476, end: 482 },
              },
              loc: { start: 476, end: 482 },
            },
            loc: { start: 476, end: 483 },
          },
          directives: [],
          loc: { start: 467, end: 483 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "outputDateTime",
            loc: { start: 486, end: 500 },
          },
          arguments: [],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "DateTime",
              loc: { start: 502, end: 510 },
            },
            loc: { start: 502, end: 510 },
          },
          directives: [],
          loc: { start: 486, end: 510 },
        },
      ],
      loc: { start: 437, end: 512 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "Magazine", loc: { start: 519, end: 527 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 532, end: 534 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 536, end: 538 },
              },
              loc: { start: 536, end: 538 },
            },
            loc: { start: 536, end: 539 },
          },
          directives: [],
          loc: { start: 532, end: 539 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "issueNumber",
            loc: { start: 542, end: 553 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int",
                loc: { start: 555, end: 558 },
              },
              loc: { start: 555, end: 558 },
            },
            loc: { start: 555, end: 559 },
          },
          directives: [],
          loc: { start: 542, end: 559 },
        },
      ],
      loc: { start: 514, end: 561 },
    },
    {
      kind: "UnionTypeDefinition",
      name: { kind: "Name", value: "Readable", loc: { start: 569, end: 577 } },
      directives: [],
      types: [
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "ShortNovel",
            loc: { start: 580, end: 590 },
          },
          loc: { start: 580, end: 590 },
        },
        {
          kind: "NamedType",
          name: {
            kind: "Name",
            value: "Magazine",
            loc: { start: 593, end: 601 },
          },
          loc: { start: 593, end: 601 },
        },
      ],
      loc: { start: 563, end: 601 },
    },
    {
      kind: "ObjectTypeExtension",
      name: { kind: "Name", value: "Query", loc: { start: 614, end: 619 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "user", loc: { start: 624, end: 628 } },
          arguments: [
            {
              kind: "InputValueDefinition",
              name: {
                kind: "Name",
                value: "id",
                loc: { start: 629, end: 631 },
              },
              type: {
                kind: "NonNullType",
                type: {
                  kind: "NamedType",
                  name: {
                    kind: "Name",
                    value: "ID",
                    loc: { start: 633, end: 635 },
                  },
                  loc: { start: 633, end: 635 },
                },
                loc: { start: 633, end: 636 },
              },
              directives: [],
              loc: { start: 629, end: 636 },
            },
          ],
          type: {
            kind: "NamedType",
            name: {
              kind: "Name",
              value: "User",
              loc: { start: 639, end: 643 },
            },
            loc: { start: 639, end: 643 },
          },
          directives: [],
          loc: { start: 624, end: 643 },
        },
      ],
      loc: { start: 602, end: 645 },
    },
    {
      kind: "ObjectTypeDefinition",
      name: { kind: "Name", value: "User", loc: { start: 652, end: 656 } },
      interfaces: [],
      directives: [],
      fields: [
        {
          kind: "FieldDefinition",
          name: { kind: "Name", value: "id", loc: { start: 661, end: 663 } },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "ID",
                loc: { start: 665, end: 667 },
              },
              loc: { start: 665, end: 667 },
            },
            loc: { start: 665, end: 668 },
          },
          directives: [],
          loc: { start: 661, end: 668 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "fullName",
            loc: { start: 671, end: 679 },
          },
          arguments: [],
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String",
                loc: { start: 681, end: 687 },
              },
              loc: { start: 681, end: 687 },
            },
            loc: { start: 681, end: 688 },
          },
          directives: [],
          loc: { start: 671, end: 688 },
        },
        {
          kind: "FieldDefinition",
          name: {
            kind: "Name",
            value: "booksRead",
            loc: { start: 691, end: 700 },
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
                    loc: { start: 703, end: 707 },
                  },
                  loc: { start: 703, end: 707 },
                },
                loc: { start: 703, end: 708 },
              },
              loc: { start: 702, end: 709 },
            },
            loc: { start: 702, end: 710 },
          },
          directives: [],
          loc: { start: 691, end: 710 },
        },
      ],
      loc: { start: 647, end: 712 },
    },
  ],
  loc: { start: 0, end: 713 },
} as unknown as DocumentNode;
