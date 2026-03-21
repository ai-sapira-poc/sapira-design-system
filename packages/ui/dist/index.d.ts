import * as react_jsx_runtime from 'react/jsx-runtime';
import * as class_variance_authority_types from 'class-variance-authority/types';
import * as React from 'react';
import React__default from 'react';
import { VariantProps } from 'class-variance-authority';
import * as SelectPrimitive from '@radix-ui/react-select';
import * as SeparatorPrimitive from '@radix-ui/react-separator';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { Command as Command$1 } from 'cmdk';
import * as lucide_react from 'lucide-react';
import { ClassValue } from 'clsx';

declare const buttonVariants: (props?: ({
    variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | "shimmer" | null | undefined;
    size?: "sm" | "lg" | "default" | "icon" | "icon-sm" | "icon-lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ButtonProps extends React.ComponentProps<"button">, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    /** Show loading spinner and disable interactions */
    loading?: boolean;
    /** Text to display while loading (replaces children) */
    loadingText?: string;
}
declare function Button({ className, variant, size, asChild, loading, loadingText, children, ...props }: ButtonProps): react_jsx_runtime.JSX.Element;

declare const badgeVariants: (props?: ({
    variant?: "default" | "destructive" | "outline" | "secondary" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface BadgeProps extends React.ComponentProps<"span">, VariantProps<typeof badgeVariants> {
    asChild?: boolean;
}
declare function Badge({ className, variant, asChild, ...props }: BadgeProps): react_jsx_runtime.JSX.Element;

/**
 * formatChunked — formats raw string values into human-readable chunks.
 *
 * Supported formats: phone, card, iban, currency, number
 */
type FormatType = "phone" | "card" | "iban" | "currency" | "number";
interface FormatOptions {
    /** Separator between chunks (default: " ") */
    separator?: string;
    /** Currency symbol for currency format (default: "€") */
    currencySymbol?: string;
    /** Decimal places for currency/number (default: 2 for currency, 0 for number) */
    decimals?: number;
    /** Thousand separator for currency/number (default: ".") */
    thousandSeparator?: string;
    /** Decimal separator for currency/number (default: ",") */
    decimalSeparator?: string;
}
declare function stripFormat(value: string, format: FormatType): string;
declare function formatChunked(raw: string, format: FormatType, options?: FormatOptions): string;

interface InputProps extends React.ComponentProps<"input"> {
    /** Show error styling */
    error?: boolean;
    /** Auto-format the displayed value (phone, card, iban, currency, number) */
    format?: FormatType;
    /** Options for the formatter */
    formatOptions?: FormatOptions;
}
declare function Input({ className, type, error, format, formatOptions, onChange, onFocus, onBlur, value, defaultValue, ...props }: InputProps): react_jsx_runtime.JSX.Element;

declare const Select: React.FC<SelectPrimitive.SelectProps>;
declare const SelectGroup: React.ForwardRefExoticComponent<SelectPrimitive.SelectGroupProps & React.RefAttributes<HTMLDivElement>>;
declare const SelectValue: React.ForwardRefExoticComponent<SelectPrimitive.SelectValueProps & React.RefAttributes<HTMLSpanElement>>;
declare const SelectTrigger: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
declare const SelectScrollUpButton: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectScrollUpButtonProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SelectScrollDownButton: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectScrollDownButtonProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SelectContent: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SelectLabel: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectLabelProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SelectItem: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectItemProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const SelectSeparator: React.ForwardRefExoticComponent<Omit<SelectPrimitive.SelectSeparatorProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;

interface CustomSelectOption {
    label: string;
    value: string;
}
interface CustomSelectProps {
    value: string;
    onChange: (value: string) => void;
    options: CustomSelectOption[] | string[];
    placeholder?: string;
    disabled?: boolean;
    className?: string;
}
declare function CustomSelect({ value, onChange, options: rawOptions, placeholder, disabled, className, }: CustomSelectProps): react_jsx_runtime.JSX.Element;

declare function Separator({ className, orientation, decorative, ...props }: React.ComponentProps<typeof SeparatorPrimitive.Root>): react_jsx_runtime.JSX.Element;

declare function Avatar({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Root>): react_jsx_runtime.JSX.Element;
declare function AvatarImage({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Image>): react_jsx_runtime.JSX.Element;
declare function AvatarFallback({ className, ...props }: React.ComponentProps<typeof AvatarPrimitive.Fallback>): react_jsx_runtime.JSX.Element;

declare function TooltipProvider({ delayDuration, ...props }: React.ComponentProps<typeof TooltipPrimitive.Provider>): react_jsx_runtime.JSX.Element;
declare function Tooltip({ ...props }: React.ComponentProps<typeof TooltipPrimitive.Root>): react_jsx_runtime.JSX.Element;
declare function TooltipTrigger({ ...props }: React.ComponentProps<typeof TooltipPrimitive.Trigger>): react_jsx_runtime.JSX.Element;
declare function TooltipContent({ className, sideOffset, children, ...props }: React.ComponentProps<typeof TooltipPrimitive.Content>): react_jsx_runtime.JSX.Element;

interface BreadcrumbItem {
    label: string;
    href?: string;
}
interface BreadcrumbsProps extends React.ComponentProps<"nav"> {
    items: BreadcrumbItem[];
    separator?: React.ReactNode;
}
declare function Breadcrumbs({ items, separator, className, ...props }: BreadcrumbsProps): react_jsx_runtime.JSX.Element;

interface TabItem {
    id: string;
    label: string;
    count?: number;
}
interface TabsProps {
    tabs: TabItem[];
    activeTab: string;
    onChange: (id: string) => void;
    className?: string;
}
declare function Tabs({ tabs, activeTab, onChange, className, ...props }: TabsProps): react_jsx_runtime.JSX.Element;

interface CheckboxProps {
    checked: boolean;
    onChange: (checked: boolean) => void;
    label?: string;
    disabled?: boolean;
    indeterminate?: boolean;
    className?: string;
}
declare function Checkbox({ checked, onChange, label, disabled, indeterminate, className }: CheckboxProps): react_jsx_runtime.JSX.Element;

interface ProgressBarProps extends React.ComponentProps<"div"> {
    value: number;
    max: number;
    label?: string;
    showValue?: boolean;
    size?: "sm" | "md" | "lg";
    variant?: "default" | "success" | "warning" | "danger";
}
declare function ProgressBar({ value, max, label, showValue, size, variant, className, ...props }: ProgressBarProps): react_jsx_runtime.JSX.Element;

interface CardSelectorOption {
    id: string;
    icon?: React.ReactNode;
    title: string;
    description?: string;
    badge?: string;
}
interface CardSelectorProps {
    options: CardSelectorOption[];
    selected: string | string[];
    onChange: (selected: string | string[]) => void;
    multiple?: boolean;
    className?: string;
}
declare function CardSelector({ options, selected, onChange, multiple, className }: CardSelectorProps): react_jsx_runtime.JSX.Element;

interface SelectDropdownOption {
    label: string;
    value: string;
}
interface SelectDropdownProps {
    options: SelectDropdownOption[];
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
    searchable?: boolean;
    disabled?: boolean;
    className?: string;
}
declare function SelectDropdown({ options, value, onChange, placeholder, searchable, disabled, className, }: SelectDropdownProps): react_jsx_runtime.JSX.Element;

interface UserProfileProps {
    name: string;
    role?: string;
    avatar?: string;
    size?: "sm" | "md" | "lg";
    className?: string;
}
declare function UserProfile({ name, role, avatar, size, className }: UserProfileProps): react_jsx_runtime.JSX.Element;

declare const iconTileVariants: (props?: ({
    variant?: "outline" | "dashed" | "solid" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface IconTileProps extends Omit<React.ComponentProps<"div">, "onClick">, VariantProps<typeof iconTileVariants> {
    icon: React.ReactNode;
    label?: string;
    href?: string;
    onClick?: () => void;
    glowing?: boolean;
}
declare function IconTile({ icon, label, href, onClick, variant, size, className, glowing, ...props }: IconTileProps): react_jsx_runtime.JSX.Element;

interface RoleCardProps extends Omit<React.ComponentProps<"div">, "onClick"> {
    icon: React.ReactNode;
    title: string;
    description?: string;
    href?: string;
    onClick?: () => void;
    selected?: boolean;
}
declare function RoleCard({ icon, title, description, href, onClick, selected, className, ...props }: RoleCardProps): react_jsx_runtime.JSX.Element;

interface TrustBarItem {
    icon?: React.ReactNode;
    label: string;
}
interface TrustBarProps extends React.ComponentProps<"div"> {
    items: TrustBarItem[];
    separator?: string;
}
declare function TrustBar({ items, separator, className, ...props }: TrustBarProps): react_jsx_runtime.JSX.Element;

interface LanguageSelectorOption {
    id: string;
    label: string;
}
interface LanguageSelectorProps extends Omit<React.ComponentProps<"div">, "onChange"> {
    options: LanguageSelectorOption[];
    selected?: string;
    onChange?: (id: string) => void;
    variant?: "inline" | "dropdown";
}
declare function LanguageSelector({ options, selected, onChange, variant, className, ...props }: LanguageSelectorProps): react_jsx_runtime.JSX.Element;

interface TextareaProps extends React.ComponentProps<"textarea"> {
    label?: string;
    error?: string;
    helperText?: string;
    resize?: "none" | "vertical" | "both";
}
declare const Textarea: React.ForwardRefExoticComponent<Omit<TextareaProps, "ref"> & React.RefAttributes<HTMLTextAreaElement>>;

interface SwitchProps {
    checked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
    label?: string;
    description?: string;
    disabled?: boolean;
    size?: "sm" | "md" | "lg";
    className?: string;
}
declare function Switch({ checked, onCheckedChange, label, description, disabled, size, className }: SwitchProps): react_jsx_runtime.JSX.Element;

interface RadioGroupOption {
    label: string;
    value: string;
    description?: string;
}
interface RadioGroupProps {
    value?: string;
    onValueChange?: (value: string) => void;
    options: RadioGroupOption[];
    orientation?: "vertical" | "horizontal";
    disabled?: boolean;
    className?: string;
}
declare function RadioGroup({ value, onValueChange, options, orientation, disabled, className }: RadioGroupProps): react_jsx_runtime.JSX.Element;

interface DatePickerProps {
    value?: Date;
    onChange?: (date: Date | undefined) => void;
    label?: string;
    error?: string;
    placeholder?: string;
    minDate?: Date;
    maxDate?: Date;
    disabled?: boolean;
    className?: string;
    /** Allow typing dates directly in the input (default: true) */
    allowTextInput?: boolean;
}
declare function DatePicker({ value, onChange, label, error: errorProp, placeholder, minDate, maxDate, disabled, className, allowTextInput, }: DatePickerProps): react_jsx_runtime.JSX.Element;

interface FileUploadProps {
    onFiles?: (files: File[]) => void;
    accept?: string;
    maxFiles?: number;
    maxSizeMB?: number;
    label?: string;
    description?: string;
    disabled?: boolean;
    className?: string;
}
declare function FileUpload({ onFiles, accept, maxFiles, maxSizeMB, label, description, disabled, className }: FileUploadProps): react_jsx_runtime.JSX.Element;

interface ExpandableTab {
    id: string;
    label: string;
    icon: React.ReactNode;
}
interface ExpandableTabsProps {
    tabs: ExpandableTab[];
    activeTab: string;
    onTabChange: (id: string) => void;
    className?: string;
}
declare function ExpandableTabs({ tabs, activeTab, onTabChange, className, }: ExpandableTabsProps): react_jsx_runtime.JSX.Element;

interface GlassCardAuthor {
    name: string;
    avatar?: string;
}
interface GlassCardProps extends React.ComponentProps<"div"> {
    title?: string;
    description?: string;
    image?: string;
    author?: GlassCardAuthor;
    date?: string;
    readingTime?: string;
    tags?: string[];
    onCardClick?: () => void;
}
declare function GlassCard({ title, description, image, author, date, readingTime, tags, onCardClick, className, ...props }: GlassCardProps): react_jsx_runtime.JSX.Element;

declare function Dialog({ ...props }: React.ComponentProps<typeof DialogPrimitive.Root>): react_jsx_runtime.JSX.Element;
declare function DialogTrigger({ ...props }: React.ComponentProps<typeof DialogPrimitive.Trigger>): react_jsx_runtime.JSX.Element;
declare function DialogPortal({ ...props }: React.ComponentProps<typeof DialogPrimitive.Portal>): react_jsx_runtime.JSX.Element;
declare function DialogClose({ ...props }: React.ComponentProps<typeof DialogPrimitive.Close>): react_jsx_runtime.JSX.Element;
declare function DialogOverlay({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Overlay>): react_jsx_runtime.JSX.Element;
declare function DialogContent({ className, children, showCloseButton, ...props }: React.ComponentProps<typeof DialogPrimitive.Content> & {
    showCloseButton?: boolean;
}): react_jsx_runtime.JSX.Element;
declare function DialogHeader({ className, ...props }: React.ComponentProps<"div">): react_jsx_runtime.JSX.Element;
declare function DialogFooter({ className, ...props }: React.ComponentProps<"div">): react_jsx_runtime.JSX.Element;
declare function DialogTitle({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Title>): react_jsx_runtime.JSX.Element;
declare function DialogDescription({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Description>): react_jsx_runtime.JSX.Element;

declare const Sheet: React.FC<DialogPrimitive.DialogProps>;
declare const SheetTrigger: React.ForwardRefExoticComponent<DialogPrimitive.DialogTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const SheetClose: React.ForwardRefExoticComponent<DialogPrimitive.DialogCloseProps & React.RefAttributes<HTMLButtonElement>>;
declare const SheetPortal: React.FC<DialogPrimitive.DialogPortalProps>;
declare function SheetOverlay({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Overlay>): react_jsx_runtime.JSX.Element;
declare const sheetContentVariants: (props?: ({
    side?: "left" | "right" | "bottom" | "top" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface SheetContentProps extends React.ComponentProps<typeof DialogPrimitive.Content>, VariantProps<typeof sheetContentVariants> {
    showCloseButton?: boolean;
}
declare function SheetContent({ side, showCloseButton, className, children, ...props }: SheetContentProps): react_jsx_runtime.JSX.Element;
declare function SheetHeader({ className, ...props }: React.ComponentProps<"div">): react_jsx_runtime.JSX.Element;
declare function SheetFooter({ className, ...props }: React.ComponentProps<"div">): react_jsx_runtime.JSX.Element;
declare function SheetTitle({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Title>): react_jsx_runtime.JSX.Element;
declare function SheetDescription({ className, ...props }: React.ComponentProps<typeof DialogPrimitive.Description>): react_jsx_runtime.JSX.Element;

declare const Popover: React.FC<PopoverPrimitive.PopoverProps>;
declare const PopoverTrigger: React.ForwardRefExoticComponent<PopoverPrimitive.PopoverTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const PopoverAnchor: React.ForwardRefExoticComponent<PopoverPrimitive.PopoverAnchorProps & React.RefAttributes<HTMLDivElement>>;
declare function PopoverContent({ className, align, sideOffset, ...props }: React.ComponentProps<typeof PopoverPrimitive.Content>): react_jsx_runtime.JSX.Element;

declare function DropdownMenu({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Root>): react_jsx_runtime.JSX.Element;
declare function DropdownMenuPortal({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Portal>): react_jsx_runtime.JSX.Element;
declare function DropdownMenuTrigger({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Trigger>): react_jsx_runtime.JSX.Element;
declare function DropdownMenuContent({ className, sideOffset, ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Content>): react_jsx_runtime.JSX.Element;
declare function DropdownMenuGroup({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Group>): react_jsx_runtime.JSX.Element;
declare function DropdownMenuItem({ className, inset, variant, ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
    variant?: "default" | "destructive";
}): react_jsx_runtime.JSX.Element;
declare function DropdownMenuCheckboxItem({ className, children, checked, ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem>): react_jsx_runtime.JSX.Element;
declare function DropdownMenuRadioGroup({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>): react_jsx_runtime.JSX.Element;
declare function DropdownMenuRadioItem({ className, children, ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.RadioItem>): react_jsx_runtime.JSX.Element;
declare function DropdownMenuLabel({ className, inset, ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
}): react_jsx_runtime.JSX.Element;
declare function DropdownMenuSeparator({ className, ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Separator>): react_jsx_runtime.JSX.Element;
declare function DropdownMenuShortcut({ className, ...props }: React.ComponentProps<"span">): react_jsx_runtime.JSX.Element;
declare function DropdownMenuSub({ ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.Sub>): react_jsx_runtime.JSX.Element;
declare function DropdownMenuSubTrigger({ className, inset, children, ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
}): react_jsx_runtime.JSX.Element;
declare function DropdownMenuSubContent({ className, ...props }: React.ComponentProps<typeof DropdownMenuPrimitive.SubContent>): react_jsx_runtime.JSX.Element;

declare function Command({ className, ...props }: React.ComponentProps<typeof Command$1>): react_jsx_runtime.JSX.Element;
declare function CommandDialog({ title, description, children, className, showCloseButton, ...props }: React.ComponentProps<typeof Dialog> & {
    title?: string;
    description?: string;
    className?: string;
    showCloseButton?: boolean;
}): react_jsx_runtime.JSX.Element;
declare function CommandInput({ className, ...props }: React.ComponentProps<typeof Command$1.Input>): react_jsx_runtime.JSX.Element;
declare function CommandList({ className, ...props }: React.ComponentProps<typeof Command$1.List>): react_jsx_runtime.JSX.Element;
declare function CommandEmpty({ ...props }: React.ComponentProps<typeof Command$1.Empty>): react_jsx_runtime.JSX.Element;
declare function CommandGroup({ className, ...props }: React.ComponentProps<typeof Command$1.Group>): react_jsx_runtime.JSX.Element;
declare function CommandSeparator({ className, ...props }: React.ComponentProps<typeof Command$1.Separator>): react_jsx_runtime.JSX.Element;
declare function CommandItem({ className, ...props }: React.ComponentProps<typeof Command$1.Item>): react_jsx_runtime.JSX.Element;
declare function CommandShortcut({ className, ...props }: React.ComponentProps<"span">): react_jsx_runtime.JSX.Element;

interface AppShellProps extends React.ComponentProps<"div"> {
    sidebar?: React.ReactNode;
    header?: React.ReactNode;
    sidebarWidth?: number;
    sidebarCollapsed?: boolean;
    collapsedWidth?: number;
}
declare function AppShell({ sidebar, header, sidebarWidth, sidebarCollapsed, collapsedWidth, className, children, ...props }: AppShellProps): react_jsx_runtime.JSX.Element;

interface SidebarNavItem {
    id: string;
    label: string;
    icon?: React.ReactNode;
    href?: string;
    badge?: React.ReactNode;
    children?: SidebarNavItem[];
}
interface SidebarSeparator {
    type: "separator";
}
type SidebarItem = SidebarNavItem | SidebarSeparator;
interface SidebarProps extends React.ComponentProps<"div"> {
    items: SidebarItem[];
    collapsed?: boolean;
    onToggle?: () => void;
    logo?: React.ReactNode;
    footer?: React.ReactNode;
    activeItemId?: string;
    onItemClick?: (item: SidebarNavItem) => void;
    renderLink?: (props: {
        href: string;
        className: string;
        children: React.ReactNode;
    }) => React.ReactNode;
}
declare function Sidebar({ items, collapsed, onToggle, logo, footer, activeItemId, onItemClick, renderLink, className, ...props }: SidebarProps): react_jsx_runtime.JSX.Element;

interface HeaderProps extends React.ComponentProps<"header"> {
    left?: React.ReactNode;
    right?: React.ReactNode;
}
declare function Header({ left, right, className, children, ...props }: HeaderProps): react_jsx_runtime.JSX.Element;

interface Breadcrumb {
    label: string;
    href?: string;
}
interface PageHeaderProps extends React.ComponentProps<"div"> {
    title: string;
    description?: string;
    actions?: React.ReactNode;
    breadcrumbs?: Breadcrumb[];
    renderLink?: (props: {
        href: string;
        className: string;
        children: React.ReactNode;
    }) => React.ReactNode;
}
declare function PageHeader({ title, description, actions, breadcrumbs, renderLink, className, ...props }: PageHeaderProps): react_jsx_runtime.JSX.Element;

interface GuidedPanelProps {
    user?: {
        name: string;
        role?: string;
        avatar?: string;
    };
    step: number;
    title: string;
    description?: string;
    context?: {
        label: string;
        content: string;
    }[];
    action?: string;
    className?: string;
}
declare function GuidedPanel({ user, step, title, description, context, action, className }: GuidedPanelProps): react_jsx_runtime.JSX.Element;

interface BentoGridProps extends React.ComponentProps<"div"> {
    className?: string;
    children: React.ReactNode;
}
declare function BentoGrid({ className, children, ...props }: BentoGridProps): react_jsx_runtime.JSX.Element;
interface BentoGridItemProps extends Omit<React.ComponentProps<"div">, "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart" | "onAnimationEnd"> {
    title?: string;
    description?: string;
    icon?: React.ReactNode;
    className?: string;
    colSpan?: 1 | 2 | 3;
    rowSpan?: 1 | 2;
    header?: React.ReactNode;
    children?: React.ReactNode;
}
declare function BentoGridItem({ title, description, icon, className, colSpan, rowSpan, header, children, ...props }: BentoGridItemProps): react_jsx_runtime.JSX.Element;

interface ColumnDef<T> {
    id: string;
    header: string;
    accessor: keyof T | ((row: T) => React.ReactNode);
    sortable?: boolean;
    cell?: (value: unknown, row: T) => React.ReactNode;
    className?: string;
}
type SortDirection = "asc" | "desc" | null;
interface SortState {
    columnId: string;
    direction: SortDirection;
}
interface DataTableProps<T> extends React.ComponentProps<"div"> {
    columns: ColumnDef<T>[];
    data: T[];
    onSort?: (sort: SortState) => void;
    sortState?: SortState;
    emptyMessage?: string;
    rowKey?: (row: T, index: number) => string | number;
    onRowClick?: (row: T, index: number) => void;
    /** Show skeleton loading rows */
    loading?: boolean;
    /** Number of skeleton rows to show (default 5) */
    skeletonRows?: number;
}
declare function DataTable<T>({ columns, data, onSort, sortState, emptyMessage, rowKey, onRowClick, loading, skeletonRows, className, ...props }: DataTableProps<T>): react_jsx_runtime.JSX.Element;

interface MetricsCardProps extends React.ComponentProps<"div"> {
    label: string;
    value: string | number;
    change?: {
        value: number;
        trend: "positive" | "negative" | "neutral";
    };
    icon?: React.ReactNode;
    description?: string;
    animated?: boolean;
    glowing?: boolean;
}
declare function MetricsCard({ label, value, change, icon, description, animated, glowing, className, ...props }: MetricsCardProps): react_jsx_runtime.JSX.Element;

interface StatusBadgeProps extends React.ComponentProps<"span"> {
    status: string;
    label?: string;
    colorMap?: Record<string, string>;
    dot?: boolean;
}
declare function StatusBadge({ status, label, colorMap, dot, className, ...props }: StatusBadgeProps): react_jsx_runtime.JSX.Element;

declare const timelineIconVariants: (props?: ({
    variant?: "error" | "user" | "success" | "warning" | "ai" | "system" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface TimelineEvent {
    id: string;
    title: string;
    description?: string;
    timestamp: string;
    icon?: React.ReactNode;
    variant?: "ai" | "user" | "system" | "success" | "warning" | "error";
    meta?: React.ReactNode;
}
interface TimelineProps extends React.ComponentProps<"div"> {
    events: TimelineEvent[];
    maxItems?: number;
    formatTimestamp?: (timestamp: string) => string;
}
declare function Timeline({ events, maxItems, formatTimestamp, className, ...props }: TimelineProps): react_jsx_runtime.JSX.Element;

interface EmptyStateProps extends React.ComponentProps<"div"> {
    icon?: React.ReactNode;
    title: string;
    description?: string;
    action?: React.ReactNode;
}
declare function EmptyState({ icon, title, description, action, className, ...props }: EmptyStateProps): react_jsx_runtime.JSX.Element;

declare const skeletonVariants: (props?: ({
    variant?: "text" | "card" | "circular" | "rectangular" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface SkeletonProps extends React.ComponentProps<"div">, VariantProps<typeof skeletonVariants> {
    width?: string | number;
    height?: string | number;
}
declare function Skeleton({ variant, width, height, className, style, ...props }: SkeletonProps): react_jsx_runtime.JSX.Element;

interface StatCardProps {
    value: string | number;
    label: string;
    onClick?: () => void;
    highlight?: boolean;
    color?: string;
    className?: string;
    animated?: boolean;
    glowing?: boolean;
}
declare function StatCard({ value, label, onClick, highlight, color, className, animated, glowing }: StatCardProps): react_jsx_runtime.JSX.Element;

interface BarChartBar {
    key: string;
    label?: string;
    color?: string;
}
interface BarChartProps extends React.ComponentProps<"div"> {
    data: Record<string, any>[];
    xKey: string;
    yKey?: string;
    bars?: BarChartBar[];
    layout?: "vertical" | "horizontal";
    stacked?: boolean;
    colors?: string[];
    showGrid?: boolean;
    showLegend?: boolean;
    showTooltip?: boolean;
    height?: number;
    animate?: boolean;
}
declare function BarChart({ data, xKey, yKey, bars, layout, stacked, colors, showGrid, showLegend, showTooltip, height, animate, className, ...props }: BarChartProps): react_jsx_runtime.JSX.Element;

interface LineChartLine {
    key: string;
    label?: string;
    color?: string;
    dashed?: boolean;
    area?: boolean;
}
interface LineChartProps extends React.ComponentProps<"div"> {
    data: Record<string, any>[];
    xKey: string;
    lines: LineChartLine[];
    showGrid?: boolean;
    showLegend?: boolean;
    showTooltip?: boolean;
    height?: number;
    animate?: boolean;
    curved?: boolean;
    colors?: string[];
}
declare function LineChart({ data, xKey, lines, showGrid, showLegend, showTooltip, height, animate, curved, colors, className, ...props }: LineChartProps): react_jsx_runtime.JSX.Element;

interface AreaChartArea {
    key: string;
    label?: string;
    color?: string;
    dashed?: boolean;
}
interface AreaChartProps extends React.ComponentProps<"div"> {
    data: Record<string, any>[];
    xKey: string;
    areas: AreaChartArea[];
    showGrid?: boolean;
    showLegend?: boolean;
    showTooltip?: boolean;
    height?: number;
    animate?: boolean;
    curved?: boolean;
    colors?: string[];
    stacked?: boolean;
}
declare function AreaChart({ data, xKey, areas, showGrid, showLegend, showTooltip, height, animate, curved, colors, stacked, className, ...props }: AreaChartProps): react_jsx_runtime.JSX.Element;

interface PieChartDatum {
    name: string;
    value: number;
    color?: string;
}
interface PieChartProps extends React.ComponentProps<"div"> {
    data: PieChartDatum[];
    donut?: boolean;
    showLabels?: boolean;
    showLegend?: boolean;
    showTooltip?: boolean;
    innerRadius?: number;
    height?: number;
    animate?: boolean;
    colors?: string[];
}
declare function PieChart({ data, donut, showLabels, showLegend, showTooltip, innerRadius, height, animate, colors, className, ...props }: PieChartProps): react_jsx_runtime.JSX.Element;

interface SparklineProps extends React.ComponentProps<"div"> {
    data: number[];
    width?: number;
    height?: number;
    color?: string;
    filled?: boolean;
}
declare function Sparkline({ data, width, height, color, filled, className, ...props }: SparklineProps): react_jsx_runtime.JSX.Element;

interface MarqueeProps extends React.ComponentProps<"div"> {
    children: React.ReactNode;
    speed?: number;
    direction?: "left" | "right";
    pauseOnHover?: boolean;
    className?: string;
    gap?: number;
}
declare function Marquee({ children, speed, direction, pauseOnHover, className, gap, ...props }: MarqueeProps): react_jsx_runtime.JSX.Element;

type LogLevel = "info" | "warn" | "error" | "debug" | "trace";
interface LogEntry {
    id: string;
    timestamp: string;
    level: LogLevel;
    message: string;
    service?: string;
    statusCode?: number;
    /** Additional details shown in expanded row */
    details?: Record<string, unknown>;
    /** Optional trace / request ID */
    traceId?: string;
}
interface InteractiveLogsTableProps extends React.ComponentProps<"div"> {
    logs: LogEntry[];
    /** Available services for filtering */
    services?: string[];
    /** Title */
    title?: string;
    /** Max height before scroll */
    maxHeight?: string;
}
declare function InteractiveLogsTable({ logs, services, title, maxHeight, className, ...props }: InteractiveLogsTableProps): react_jsx_runtime.JSX.Element;

interface FeatureCarouselItem {
    id: string;
    label: string;
    title: string;
    description: string;
    image: string;
    /** Optional accent color for the pill label */
    color?: string;
}
interface FeatureCarouselProps extends React.ComponentProps<"div"> {
    items: FeatureCarouselItem[];
    /** Auto-advance interval in ms. 0 = disabled */
    autoPlay?: number;
    /** Show navigation arrows */
    showArrows?: boolean;
}
declare function FeatureCarousel({ items, autoPlay, showArrows, className, ...props }: FeatureCarouselProps): react_jsx_runtime.JSX.Element;

interface WorkflowNode {
    id: string;
    type: "trigger" | "action" | "condition";
    title: string;
    description: string;
    icon: React__default.ComponentType<{
        className?: string;
    }>;
    color: string;
    position: {
        x: number;
        y: number;
    };
}
interface WorkflowConnection {
    from: string;
    to: string;
}
interface WorkflowBuilderProps extends React__default.ComponentProps<"div"> {
}
declare function WorkflowBuilder({ className, ...props }: WorkflowBuilderProps): react_jsx_runtime.JSX.Element;

type ToastVariant = "default" | "success" | "error" | "warning";
interface Toast {
    id: string;
    title: string;
    description?: string;
    variant?: ToastVariant;
    duration?: number;
}
type ToastInput = Omit<Toast, "id">;
declare function useToast(): {
    toast: (toast: ToastInput) => string;
    dismiss: (id: string) => void;
    toasts: Toast[];
};
interface ToastProviderProps {
    children: React.ReactNode;
    /** Default auto-dismiss duration in ms (default 5000) */
    defaultDuration?: number;
}
declare function ToastProvider({ children, defaultDuration }: ToastProviderProps): react_jsx_runtime.JSX.Element;

interface ConfirmDialogProps {
    open: boolean;
    onOpenChange?: (open: boolean) => void;
    title: string;
    description?: string;
    confirmLabel?: string;
    cancelLabel?: string;
    onConfirm: () => void;
    onCancel?: () => void;
    variant?: "default" | "destructive";
    className?: string;
}
declare function ConfirmDialog({ open, onOpenChange, title, description, confirmLabel, cancelLabel, onConfirm, onCancel, variant, className, }: ConfirmDialogProps): react_jsx_runtime.JSX.Element;

interface FilterOption {
    label: string;
    value: string;
}
interface FilterDefinition {
    label: string;
    value: string;
    options: FilterOption[];
}
interface FilterBarProps {
    filters: FilterDefinition[];
    activeFilters: Record<string, string[]>;
    onChange: (filterValue: string, optionValue: string) => void;
    onClear: () => void;
    className?: string;
}
declare function FilterBar({ filters, activeFilters, onChange, onClear, className, }: FilterBarProps): react_jsx_runtime.JSX.Element;

interface SearchBoxProps {
    placeholder?: string;
    shortcut?: string;
    onSearch: (value: string) => void;
    value?: string;
    debounceMs?: number;
    className?: string;
}
declare function SearchBox({ placeholder, shortcut, onSearch, value: controlledValue, debounceMs, className, }: SearchBoxProps): react_jsx_runtime.JSX.Element;

interface DrawerPanelProps {
    open: boolean;
    onClose: () => void;
    title: string;
    description?: string;
    side?: "left" | "right";
    width?: string;
    footer?: React.ReactNode;
    children: React.ReactNode;
    className?: string;
}
declare function DrawerPanel({ open, onClose, title, description, side, width, footer, children, className, }: DrawerPanelProps): react_jsx_runtime.JSX.Element;

interface WizardStep {
    label: string;
    description?: string;
}
interface WizardStepperProps {
    steps: WizardStep[];
    currentStep: number;
    orientation?: "horizontal" | "vertical";
    onStepClick?: (step: number) => void;
    className?: string;
}
declare function WizardStepper({ steps, currentStep, orientation, onStepClick, className, }: WizardStepperProps): react_jsx_runtime.JSX.Element;

interface NotificationCardProps {
    icon?: React.ReactNode;
    title: string;
    description?: string;
    badge?: {
        label: string;
        variant?: string;
    };
    timestamp?: string;
    onClick?: () => void;
    variant?: "info" | "warning" | "error" | "success";
    className?: string;
}
declare function NotificationCard({ icon, title, description, badge, timestamp, onClick, variant, className }: NotificationCardProps): react_jsx_runtime.JSX.Element;

interface NotificationBellProps {
    count?: number;
    onClick?: () => void;
    maxCount?: number;
    className?: string;
}
declare function NotificationBell({ count, onClick, maxCount, className }: NotificationBellProps): react_jsx_runtime.JSX.Element;

interface CompactStep {
    label: string;
    icon?: React.ReactNode;
}
interface CompactStepperProps {
    steps: CompactStep[];
    currentStep: number;
    className?: string;
}
declare function CompactStepper({ steps, currentStep, className }: CompactStepperProps): react_jsx_runtime.JSX.Element;

declare const variantConfig: {
    readonly info: {
        readonly icon: React.ForwardRefExoticComponent<Omit<lucide_react.LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
        readonly bg: "bg-blue-50 dark:bg-blue-950/30";
        readonly border: "border-blue-200 dark:border-blue-800";
        readonly text: "text-blue-800 dark:text-blue-200";
        readonly iconColor: "text-blue-500";
    };
    readonly success: {
        readonly icon: React.ForwardRefExoticComponent<Omit<lucide_react.LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
        readonly bg: "bg-green-50 dark:bg-green-950/30";
        readonly border: "border-green-200 dark:border-green-800";
        readonly text: "text-green-800 dark:text-green-200";
        readonly iconColor: "text-green-500";
    };
    readonly warning: {
        readonly icon: React.ForwardRefExoticComponent<Omit<lucide_react.LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
        readonly bg: "bg-amber-50 dark:bg-amber-950/30";
        readonly border: "border-amber-200 dark:border-amber-800";
        readonly text: "text-amber-800 dark:text-amber-200";
        readonly iconColor: "text-amber-500";
    };
    readonly error: {
        readonly icon: React.ForwardRefExoticComponent<Omit<lucide_react.LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
        readonly bg: "bg-red-50 dark:bg-red-950/30";
        readonly border: "border-red-200 dark:border-red-800";
        readonly text: "text-red-800 dark:text-red-200";
        readonly iconColor: "text-red-500";
    };
};
type AlertVariant = keyof typeof variantConfig;
interface AlertProps extends React.ComponentProps<"div"> {
    variant?: AlertVariant;
    title?: string;
    icon?: React.ReactNode;
    dismissible?: boolean;
    onDismiss?: () => void;
}
declare function Alert({ variant, title, icon, dismissible, onDismiss, children, className, ...props }: AlertProps): react_jsx_runtime.JSX.Element | null;

interface SpinnerProps extends React.ComponentProps<"div"> {
    size?: "sm" | "md" | "lg";
    label?: string;
}
declare function Spinner({ size, label, className, ...props }: SpinnerProps): react_jsx_runtime.JSX.Element;

interface PaginationProps extends React.ComponentProps<"nav"> {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
    siblingCount?: number;
    showFirst?: boolean;
    showLast?: boolean;
}
declare function Pagination({ currentPage, totalPages, onPageChange, siblingCount, showFirst, showLast, className, ...props }: PaginationProps): react_jsx_runtime.JSX.Element;

interface GlowingEffectProps {
    spread?: number;
    glow?: boolean;
    proximity?: number;
    borderWidth?: number;
    disabled?: boolean;
    className?: string;
    color?: string;
    children?: React.ReactNode;
}
declare function GlowingEffect({ spread, glow, proximity, borderWidth, disabled, className, color, children, }: GlowingEffectProps): react_jsx_runtime.JSX.Element;

interface ShimmerButtonProps extends React.ComponentProps<"button"> {
    shimmerColor?: string;
    shimmerSize?: string;
    shimmerDuration?: string;
    background?: string;
}
declare function ShimmerButton({ shimmerColor, shimmerSize, shimmerDuration, background, className, children, ...props }: ShimmerButtonProps): react_jsx_runtime.JSX.Element;

interface NumberTickerProps {
    value: number;
    duration?: number;
    delay?: number;
    decimals?: number;
    prefix?: string;
    suffix?: string;
    className?: string;
    direction?: "up" | "down";
}
declare function NumberTicker({ value, duration, delay, decimals, prefix, suffix, className, direction, }: NumberTickerProps): react_jsx_runtime.JSX.Element;

interface TextShimmerProps {
    children: React.ReactNode;
    duration?: number;
    spread?: number;
    className?: string;
}
declare function TextShimmer({ children, duration, spread, className, }: TextShimmerProps): react_jsx_runtime.JSX.Element;

interface AnimatedCounterProps {
    value: number;
    className?: string;
}
declare function AnimatedCounter({ value, className }: AnimatedCounterProps): react_jsx_runtime.JSX.Element;

interface AnimatedBackgroundProps extends React.ComponentProps<"div"> {
    variant?: "gradient" | "aurora" | "dots" | "grid";
    colors?: string[];
    speed?: "slow" | "medium" | "fast";
    interactive?: boolean;
    className?: string;
    children?: React.ReactNode;
}
declare function AnimatedBackground({ variant, colors, speed, interactive, className, children, ...props }: AnimatedBackgroundProps): react_jsx_runtime.JSX.Element;

interface GlowyWavesHeroStat {
    label: string;
    value: string;
}
interface GlowyWavesHeroCTA {
    label: string;
    href?: string;
    onClick?: () => void;
    variant?: "primary" | "secondary";
}
interface GlowyWavesHeroProps extends React.ComponentProps<"section"> {
    /** Hero headline */
    title: string;
    /** Hero subtitle / description */
    subtitle?: string;
    /** Call-to-action buttons */
    ctas?: GlowyWavesHeroCTA[];
    /** Stats counters shown below the CTA */
    stats?: GlowyWavesHeroStat[];
    /** Primary wave color */
    waveColor?: string;
    /** Secondary wave color */
    waveColorSecondary?: string;
    /** Whether waves react to mouse movement */
    interactive?: boolean;
}
declare function GlowyWavesHero({ title, subtitle, ctas, stats, waveColor, waveColorSecondary, interactive, className, children, ...props }: GlowyWavesHeroProps): react_jsx_runtime.JSX.Element;

interface AIBadgeProps {
    label?: string;
    size?: "sm" | "md";
    tooltip?: string;
    showTooltip?: boolean;
    animated?: boolean;
    className?: string;
}
declare function AIBadge({ label, size, tooltip, showTooltip, animated, className, }: AIBadgeProps): react_jsx_runtime.JSX.Element;

interface UseStreamingTextOptions {
    text: string;
    speed?: number;
    onComplete?: () => void;
}
declare function useStreamingText({ text, speed, onComplete, }: UseStreamingTextOptions): {
    displayed: string;
    isStreaming: boolean;
};
interface StreamingTextProps {
    text: string;
    speed?: number;
    onComplete?: () => void;
    cursor?: boolean;
    className?: string;
}
declare function StreamingText({ text, speed, onComplete, cursor, className, }: StreamingTextProps): react_jsx_runtime.JSX.Element;

interface AIGenerationPreviewProps {
    title?: string;
    content: string;
    isGenerating?: boolean;
    onAccept?: () => void;
    onReject?: () => void;
    onRegenerate?: () => void;
    className?: string;
}
declare function AIGenerationPreview({ title, content, isGenerating, onAccept, onReject, onRegenerate, className, }: AIGenerationPreviewProps): react_jsx_runtime.JSX.Element;

interface ThemeConfig {
    name: string;
    brand?: string;
    brandForeground?: string;
    fontSans?: string;
    fontMono?: string;
    radius?: number;
}
interface ThemeCSS {
    "--brand"?: string;
    "--brand-foreground"?: string;
    "--font-sans-family"?: string;
    "--font-mono-family"?: string;
    "--radius"?: string;
}
/**
 * Create CSS custom property overrides from a theme config.
 */
declare function createTheme(config: ThemeConfig): ThemeCSS;
interface ThemeProviderProps {
    children: React.ReactNode;
    theme?: ThemeConfig;
    /** Shorthand: set brand color directly */
    brand?: string;
    fontSans?: string;
    fontMono?: string;
    className?: string;
}
declare function useTheme(): ThemeConfig | null;
declare function ThemeProvider({ children, theme, brand, fontSans, fontMono, className, }: ThemeProviderProps): react_jsx_runtime.JSX.Element;

/**
 * Industrial theme — the default Sapira theme.
 * Austere, professional, minimal color usage.
 */
declare const industrialTheme: ThemeConfig;

declare function cn(...inputs: ClassValue[]): string;

export { AIBadge, type AIBadgeProps, AIGenerationPreview, type AIGenerationPreviewProps, Alert, type AlertProps, type AlertVariant, AnimatedBackground, type AnimatedBackgroundProps, AnimatedCounter, type AnimatedCounterProps, AppShell, type AppShellProps, AreaChart, type AreaChartArea, type AreaChartProps, Avatar, AvatarFallback, AvatarImage, Badge, type BadgeProps, BarChart, type BarChartBar, type BarChartProps, BentoGrid, BentoGridItem, type BentoGridItemProps, type BentoGridProps, type Breadcrumb, type BreadcrumbItem, Breadcrumbs, type BreadcrumbsProps, Button, type ButtonProps, CardSelector, type CardSelectorOption, type CardSelectorProps, Checkbox, type CheckboxProps, type ColumnDef, Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandSeparator, CommandShortcut, type CompactStep, CompactStepper, type CompactStepperProps, ConfirmDialog, type ConfirmDialogProps, CustomSelect, type CustomSelectOption, type CustomSelectProps, DataTable, type DataTableProps, DatePicker, type DatePickerProps, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger, DrawerPanel, type DrawerPanelProps, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, EmptyState, type EmptyStateProps, type ExpandableTab, ExpandableTabs, type ExpandableTabsProps, FeatureCarousel, type FeatureCarouselItem, type FeatureCarouselProps, FileUpload, type FileUploadProps, FilterBar, type FilterBarProps, type FilterDefinition, type FilterOption, type FormatOptions, type FormatType, GlassCard, type GlassCardAuthor, type GlassCardProps, GlowingEffect, type GlowingEffectProps, GlowyWavesHero, type GlowyWavesHeroCTA, type GlowyWavesHeroProps, type GlowyWavesHeroStat, GuidedPanel, type GuidedPanelProps, Header, type HeaderProps, IconTile, type IconTileProps, Input, type InputProps, InteractiveLogsTable, type InteractiveLogsTableProps, LanguageSelector, type LanguageSelectorOption, type LanguageSelectorProps, LineChart, type LineChartLine, type LineChartProps, type LogEntry, type LogLevel, Marquee, type MarqueeProps, MetricsCard, type MetricsCardProps, NotificationBell, type NotificationBellProps, NotificationCard, type NotificationCardProps, NumberTicker, type NumberTickerProps, PageHeader, type PageHeaderProps, Pagination, type PaginationProps, PieChart, type PieChartDatum, type PieChartProps, Popover, PopoverAnchor, PopoverContent, PopoverTrigger, ProgressBar, type ProgressBarProps, RadioGroup, type RadioGroupOption, type RadioGroupProps, RoleCard, type RoleCardProps, SearchBox, type SearchBoxProps, Select, SelectContent, SelectDropdown, type SelectDropdownOption, type SelectDropdownProps, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue, Separator, Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetOverlay, SheetPortal, SheetTitle, SheetTrigger, ShimmerButton, type ShimmerButtonProps, Sidebar, type SidebarItem, type SidebarNavItem, type SidebarProps, type SidebarSeparator, Skeleton, type SkeletonProps, type SortDirection, type SortState, Sparkline, type SparklineProps, Spinner, type SpinnerProps, StatCard, type StatCardProps, StatusBadge, type StatusBadgeProps, StreamingText, type StreamingTextProps, Switch, type SwitchProps, type TabItem, Tabs, type TabsProps, TextShimmer, type TextShimmerProps, Textarea, type TextareaProps, type ThemeCSS, type ThemeConfig, ThemeProvider, Timeline, type TimelineEvent, type TimelineProps, type Toast, type ToastInput, ToastProvider, type ToastProviderProps, type ToastVariant, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, TrustBar, type TrustBarItem, type TrustBarProps, type UseStreamingTextOptions, UserProfile, type UserProfileProps, type WizardStep, WizardStepper, type WizardStepperProps, WorkflowBuilder, type WorkflowBuilderProps, type WorkflowConnection, type WorkflowNode, badgeVariants, buttonVariants, cn, createTheme, formatChunked, iconTileVariants, industrialTheme, sheetContentVariants, skeletonVariants, stripFormat, timelineIconVariants, useStreamingText, useTheme, useToast };
