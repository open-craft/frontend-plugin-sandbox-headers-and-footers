# frontend-plugin-sandbox

## Purpose

This repo contains plug-in code for OpenCraft's sandboxes.

## Installation

The package can be installed from npm using:

```bash
npm install @opencraft/frontend-plugin-sandbox-headers-and-footers
```

Or to install from GitHub directly:

```bash
npm install 'git+https://github.com/open-craft/frontend-plugin-sandbox-headers-and-footers.git#branch_tag_or_commit'
```

## Usage

This project exposes all slots and their configuration to simplify testing. You
can add the following to your `env.config.tsx` file to enable all the slots.

```jsx
import { slotSettings } from "@opencraft/frontend-plugin-sandbox-headers-and-footers";

const config = {
    pluginSlots: slotSettings,
};

export default config;
```

For installation using Tutor you can use the following code as reference:


```python
from tutor import hooks

from tutormfe.hooks import PLUGIN_SLOTS

for mfe_app in ["account", "discussions", "learner-dashboard", "learning", "profile", "catalog"]:
    hooks.Filters.ENV_PATCHES.add_item(
        (
            f"mfe-dockerfile-post-npm-install-{mfe_app}",
            """
    RUN --mount=type=cache,target=/root/.npm,sharing=shared npm install '@edx/frontend-component-header@latest'
    RUN --mount=type=cache,target=/root/.npm,sharing=shared npm install '@opencraft/frontend-plugin-sandbox-headers-and-footers'
    """,
        )
    )
    hooks.Filters.ENV_PATCHES.add_item(
        (
            f"mfe-env-config-runtime-definitions-{mfe_app}",
            """
        const { WhiteLogo, MenuWrapper, SandboxFooter } = await import(
            /* webpackFetchPriority: "eager" */
            '@opencraft/frontend-plugin-sandbox-headers-and-footers'
        );
        """,
        )
    )

    PLUGIN_SLOTS.add_items(
        [
            (
                mfe_app,
                "org.openedx.frontend.layout.footer.v1",
                """
                    {
                      op: PLUGIN_OPERATIONS.Hide,
                      widgetId: 'default_contents',
                    }""",
            ),
            (
                mfe_app,
                "org.openedx.frontend.layout.footer.v1",
                """
                {
                  op: PLUGIN_OPERATIONS.Insert,
                  widget: {
                    id: 'custom_footer',
                    type: DIRECT_PLUGIN,
                    RenderWidget: SandboxFooter,
                  },
                }""",
            ),
            (
                mfe_app,
                "org.openedx.frontend.layout.header_logo.v1",
                """
            {
              op: PLUGIN_OPERATIONS.Insert,
              widget: {
                id: 'custom_logo',
                type: DIRECT_PLUGIN,
                RenderWidget: WhiteLogo,
              },

            }""",
            ),
            (
                mfe_app,
                "org.openedx.frontend.layout.header_desktop_user_menu.v1",
                """
            {
              op: PLUGIN_OPERATIONS.Wrap,
              widgetId: 'default_contents',
              wrapper: MenuWrapper,
            }""",
            ),
            (
                mfe_app,
                "org.openedx.frontend.layout.header_mobile_user_menu.v1",
                """
            {
              op: PLUGIN_OPERATIONS.Wrap,
              widgetId: 'default_contents',
              wrapper: MenuWrapper,
            }""",
            ),
        ]
    )


hooks.Filters.ENV_PATCHES.add_item(
        (
            f"mfe-env-config-runtime-definitions-catalog",
            """
            const { CatalogBanner } = await import('@opencraft/frontend-plugin-sandbox-headers-and-footers');
            """,
        )
    )

PLUGIN_SLOTS.add_items(
        [
            (
                "catalog",
                "org.openedx.frontend.catalog.home_page.banner",
                """
                    {
                      op: PLUGIN_OPERATIONS.Hide,
                      widgetId: 'default_contents',
                    }""",
            ), (
                "catalog",
                "org.openedx.frontend.catalog.home_page.banner",
                """
                    {
                      op: PLUGIN_OPERATIONS.Insert,
                      widget: {
                        id: "opencraft_banner",
                        type: DIRECT_PLUGIN,

                        RenderWidget: CatalogBanner,
                      },
                    }""",
            ),
        ]
)
```
