###############################################
### QTILE CONFIGURATION FILE OF DANIEL DIAZ ###
#
#  ____   ____
# |  _ \ |  _ \   Copyright (c) 2020 Daniel Diaz
# | | | || | | |
# | |_| || |_| |  http://www.github.com/Daniel1404/
# |____/ |____/
#

# Copyright (c) 2010 Aldo Cortesi
# Copyright (c) 2010, 2014 dequis
# Copyright (c) 2012 Randall Ma
# Copyright (c) 2012-2014 Tycho Andersen
# Copyright (c) 2012 Craig Barnes
# Copyright (c) 2013 horsik
# Copyright (c) 2013 Tao Sauvage
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in
# all copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
# SOFTWARE.

import os
import subprocess


from typing import List  # noqa: F401

# from libqtile import qtile
from libqtile import hook
from libqtile import bar, layout, widget
from libqtile.config import Click, Drag, Group, Key, Screen
from libqtile.lazy import lazy
from libqtile.utils import guess_terminal

mod = "mod4"
alt = "mod1"
terminal = guess_terminal()
termite = "termite"   # Open termite instead of default terminal
st = "st" # Open st instead of default terminal

#################### CUSTOM KEYS  ##########################
keys = [
    # Switch between windows in current stack pane
    Key([mod], "k", lazy.layout.down(),
        desc="Move focus down in stack pane"),
    Key([mod], "j", lazy.layout.up(),
        desc="Move focus up in stack pane"),

    # Move windows up or down in current stack
    Key([mod, "control"], "k", lazy.layout.shuffle_down(),
        desc="Move window down in current stack "),
    Key([mod, "control"], "j", lazy.layout.shuffle_up(),
        desc="Move window up in current stack "),
    Key([mod, "control"], "h", lazy.layout.swap_left()),
    Key([mod, "control"], "l", lazy.layout.swap_right()),

    # Move screen to next and previous workspace
    # Added!
    Key([mod], "l", lazy.screen.next_group(),
        desc="Move screen to the next workspace"),
    Key([mod], "h", lazy.screen.prev_group(),
        desc="Move screen to the previous workspace"),
    # Move Windows to next and previous workspace
    # Key([mod, "shift"], "l", lazy.window.next_group(),
    #     desc="Move window to the next workspace"),
    # Key([mod, "shift"], "h", lazy.window.prev_group(),
    #     desc="Move windows to the previous workspace"),

    # Switch window focus to other pane(s) of stack
    Key([mod], "space", lazy.layout.next(),
        desc="Switch window focus to other pane(s) of stack"),

    # Swap panes of split stack
    Key([mod, "shift"], "space", lazy.layout.rotate(),
        desc="Swap panes of split stack"),

    # Toggle between split and unsplit sides of stack.
    # Split = all windows displayed
    # Unsplit = 1 window displayed, like Max layout, but still with
    # multiple stack panes
    Key([mod, "shift"], "Return", lazy.layout.toggle_split(),
        desc="Toggle between split and unsplit sides of stack"),
    Key([mod], "Return", lazy.spawn(termite), desc="Launch terminal"),

    # Toggle between different layouts as defined below
    Key([mod], "Tab", lazy.next_layout(), desc="Toggle between layouts"),
    Key([mod], "w", lazy.window.kill(), desc="Kill focused window"),

    Key([mod, "control"], "r", lazy.restart(), desc="Restart qtile"),
    Key([mod, "control"], "q", lazy.shutdown(), desc="Shutdown qtile"),
    Key([mod, alt], "space", lazy.spawn("dmenu_run -p 'Run: '"),
        desc="Run Dmenu"),

    # Applications hotkeys
    # Apps are opened with Super + left alt keys
    Key([mod, alt], "d", lazy.spawn("emacs"), desc="Open Doom Emacs"),
    Key([mod, alt], "v", lazy.spawn("gvim"), desc="Open Gvim"),
    Key([mod, alt], "n", lazy.spawn(termite + " -e nvim"), desc="Open Neovim"),
    Key([mod, alt], "f", lazy.spawn(termite + " -e vifm"), desc="Open vifm"),
    Key([mod, alt], "b", lazy.spawn("brave"), desc="Open Brave"),
    Key([mod, alt], "c", lazy.spawn("codium"), desc="Open VS codium"),
    Key([mod, alt], "p", lazy.spawn("pycharm"), desc="Open Pycharm CE"),
    Key([mod, alt], "a", lazy.spawn("pavucontrol"), desc="Open Pulse audio GUI controller"),
    Key([mod, alt], "e", lazy.spawn("emacs -e nvim ~/.config/qtile/config.py"),
        desc="Open Qtile config file on emacs"),


    # PWA hotkeys

    Key([mod, alt], "s",
        lazy.spawn("/usr/lib/brave-beta/brave --profile-directory=Default --app-id=pjibgclleladliembfgfagdaldikeohf"),
        desc="Open Spotify PWA"), # In others system the PWA id will be different

    Key([mod, alt], "y",
        lazy.spawn("/usr/lib/brave-beta/brave --profile-directory=Default --app-id=cinhimbnkkaeohfgghhklpknlkffjgod"),
        desc="Open Youtube Music PWA"),

    # Media hotkeys
    Key([mod], 'Up', lazy.spawn('pulseaudio-ctl up 5')),
    Key([mod], 'Down', lazy.spawn('pulseaudio-ctl down 5')),
    Key([mod], 'm', lazy.spawn('pulseaudio-ctl set 1')),

    # Screenshots
    Key([], "Print", lazy.spawn('flameshot gui')),
    Key([alt], "Print", lazy.spawn('flameshot full -c')),
]

group_icons = ["B   ", 
            "D  ",
            "T  ",
            "V  ",
            "M  ",
            "C  ",
            "E  "]

groups = [Group(name, layout="max") if name == group_icons[0] else Group(name, layout="floating")
          if name ==  group_icons[-1] else Group(name, layout="monadtall") for name in group_icons]



for icon in group_icons:

    indx = (icon[0]).lower()

    keys += [
        Key([mod, 'control'], indx, lazy.group[icon].toscreen()),
        Key([mod, 'shift'], indx, lazy.window.togroup(icon))]


default_layouts_theme={
     "border_width": 2,
     "margin": 6,
     "border_focus": "#668bd7",
     "border_normal": "1D2330"}

layouts = [
    layout.Max(**default_layouts_theme),
    layout.MonadTall(**default_layouts_theme),
    layout.Stack(num_stacks=2),
    layout.floating.Floating(**default_layouts_theme),
    layout.TreeTab(**default_layouts_theme),
    # Try more layouts by unleashing below layouts.
    # layout.Bsp(),
    # layout.Columns(),
    # layout.Matrix(),
    # layout.MonadWide(**default_layouts_theme),
    # layout.RatioTile(),
    # layout.Tile(),
    # layout.VerticalTile(),
    # layout.Zoomy(),
]

# Colors for the bar

colors = [["#292d3e", "#292d3e"], # panel background
          ["#434758", "#434758"], # background for current screen tab
          ["#ffffff", "#ffffff"], # font color for group names
          ["#ff5555", "#ff5555"], # border line color for current tab
          ["#8d62a9", "#8d62a9"], # border line color for other tab and odd widgets
          ["#668bd7", "#668bd7"], # color for the even widgets
          ["#e1acff", "#e1acff"]] # window name


widget_defaults = dict(
    font="Ubuntu Mono",
    fontsize = 12,
    padding = 2,
    background=colors[2]
)

extension_defaults = widget_defaults.copy()

def init_widgets_list():
    '''
    Function that returns the desired widgets in form of list
    '''
    widgets_list = [
              widget.Sep(
                       linewidth = 0,
                       padding = 6,
                       foreground = colors[2],
                       background = colors[0]
                       ),
              widget.Image(
                       filename = "~/.config/qtile/icons/python.png",
                       mouse_callbacks = {'Button1': lambda qtile: qtile.cmd_spawn('dmenu_run')}
                       ),
              widget.GroupBox(
                       font = "Ubuntu Bold",
                       fontsize = 12,
                       margin_y = 2,
                       margin_x = 0,
                       padding_y = 5,
                       padding_x = 3,
                       borderwidth = 3,
                       active = colors[2],
                       inactive = colors[2],
                       rounded = False,
                       highlight_color = colors[1],
                       highlight_method = "line",
                       this_current_screen_border = colors[3],
                       this_screen_border = colors [4],
                       other_current_screen_border = colors[0],
                       other_screen_border = colors[0],
                       foreground = colors[2],
                       background = colors[0]
                       ),
              widget.Prompt(
                       prompt = lazy.spawncmd(),
                       font = "Ubuntu Mono",
                       padding = 10,
                       foreground = colors[3],
                       background = colors[1]
                       ),
              widget.Sep(
                       linewidth = 0,
                       padding = 40,
                       foreground = colors[2],
                       background = colors[0]
                       ),
              widget.WindowName(
                       foreground = colors[6],
                       background = colors[0],
                       padding = 0
                       ),
              widget.Systray(
                       background = colors[0],
                       padding = 5
                       ),
              widget.TextBox(
                       text = '',
                       background = colors[0],
                       foreground = colors[4],
                       padding = 0,
                       fontsize = 37
                       ),
              widget.TextBox(
                       text = " ⟳",
                       padding = 2,
                       foreground = colors[2],
                       background = colors[4],
                       fontsize = 14
                       ),
              widget.Pacman(
                       update_interval = 1800,
                       foreground = colors[2],
                       mouse_callbacks = {'Button1': lambda qtile: qtile.cmd_spawn(termite + ' -e sudo pacman -Syu')},
                       background = colors[4]
                       ),
              widget.TextBox(
                       text = "Updates",
                       padding = 5,
                       mouse_callbacks = {'Button1': lambda qtile: qtile.cmd_spawn(termite + ' -e sudo pacman -Syu')},
                       foreground = colors[2],
                       background = colors[4]
                       ),
              widget.TextBox(
                       text = '',
                       background = colors[4],
                       foreground = colors[5],
                       padding = 0,
                       fontsize = 37
                       ),
              widget.TextBox(
                       text = " 🖬",
                       foreground = colors[2],
                       background = colors[5],
                       padding = 0,
                       fontsize = 14
                       ),
              widget.Memory(
                       foreground = colors[2],
                       background = colors[5],
                       mouse_callbacks = {'Button1': lambda qtile: qtile.cmd_spawn(termite + ' -e htop')},
                       padding = 5
                       ),
              widget.TextBox(
                       text = '',
                       background = colors[5],
                       foreground = colors[4],
                       padding = 0,
                       fontsize = 37
                       ),
              widget.TextBox(
                      text = " Vol:",
                       foreground = colors[2],
                       background = colors[4],
                       padding = 0
                       ),
              widget.Volume(
                       foreground = colors[2],
                       background = colors[4],
                       padding = 5
                       ),
              widget.TextBox(
                       text = '',
                       background = colors[4],
                       foreground = colors[5],
                       padding = 0,
                       fontsize = 37
                       ),
              widget.CurrentLayoutIcon(
                       custom_icon_paths = [os.path.expanduser("~/.config/qtile/icons")],
                       foreground = colors[0],
                       background = colors[5],
                       padding = 0,
                       scale = 0.7
                       ),
              widget.CurrentLayout(
                       foreground = colors[2],
                       background = colors[5],
                       padding = 5
                       ),
              widget.TextBox(
                       text = '',
                       background = colors[5],
                       foreground = colors[4],
                       padding = 0,
                       fontsize = 37
                       ),
              widget.Clock(
                       foreground = colors[2],
                       background = colors[4],
                       format = "%A, %B %d  [ %H:%M ]"
                       ),
              widget.Sep(
                       linewidth = 0,
                       padding = 10,
                       foreground = colors[0],
                       background = colors[4]
                       ),
              ]
    return widgets_list


def init_widgets_screen():
    '''
    Function that returns the widgets in a list.
    It can be modified so it is useful if you  have a multimonitor system
    '''
    widgets_screen = init_widgets_list()
    return widgets_screen

def init_screen():
    '''
    Init the widgets in the screen
    '''
    return [Screen(top=bar.Bar(widgets=init_widgets_screen(), opacity=1.0, size=20))]


if __name__ in ["config", "__main__"]:
    screens = init_screen()
    main_widgets_list = init_widgets_list()
    widgets_screen1 = init_widgets_screen()


# Drag floating layouts.
mouse = [
    Drag([mod], "Button1", lazy.window.set_position_floating(),
         start=lazy.window.get_position()),
    Drag([mod], "Button3", lazy.window.set_size_floating(),
         start=lazy.window.get_size()),
    Click([mod], "Button2", lazy.window.bring_to_front())
]

dgroups_key_binder = None
dgrups_app_rules = []
main = None  # WARNING: this is deprecated and will be removed soon
follow_mouse_focus = True
bring_front_click = False
cursor_warp = False
floating_layout = layout.Floating(float_rules=[
    # Run the utility of `xprop` to see the wm class and name of an X client.
    {'wmclass': 'confirm'},
    {'wmclass': 'dialog'},
    {'wmclass': 'download'},
    {'wmclass': 'error'},
    {'wmclass': 'file_progress'},
    {'wmclass': 'notification'},
    {'wmclass': 'splash'},
    {'wmclass': 'toolbar'},
    {'wmclass': 'confirmreset'},  # gitk
    {'wmclass': 'makebranch'},  # gitk
    {'wmclass': 'maketag'},  # gitk
    {'wname': 'branchdialog'},  # gitk
    {'wname': 'pinentry'},  # GPG key password entry
    {'wmclass': 'ssh-askpass'},  # ssh-askpass
])
auto_fullscreen = True
focus_on_window_activation = "smart"


@hook.subscribe.startup_once
def start_once():
    home = os.path.expanduser('~')
    subprocess.call([home + '/.config/qtile/autostart.sh'])

# XXX: Gasp! We're lying here. In fact, nobody really uses or cares about this
# string besides java UI toolkits; you can see several discussions on the
# mailing lists, GitHub issues, and other WM documentation that suggest setting
# this string if your java app doesn't work correctly. We may as well just lie
# and say that we're a working one by default.
#
#We choose LG3D to maximize irony: it is a 3D non-reparenting WM written in,
# java that happens to be on java's whitelist.
wmname = "LG3D"
