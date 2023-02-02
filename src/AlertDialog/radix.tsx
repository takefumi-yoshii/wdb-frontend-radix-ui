import * as AlertDialog from "@radix-ui/react-alert-dialog";

const AlertDialogDemo = () => (
	<AlertDialog.Root>
		<AlertDialog.Trigger asChild>
			<button className="Button violet">
				アカウントを削除
			</button>
		</AlertDialog.Trigger>
		<AlertDialog.Portal>
			<AlertDialog.Overlay className="AlertDialogOverlay" />
			<AlertDialog.Content className="AlertDialogContent">
				<AlertDialog.Title className="AlertDialogTitle">
					本当によろしいですか?
				</AlertDialog.Title>
				<AlertDialog.Description className="AlertDialogDescription">
					この操作は元に戻せません。
					アカウントが完全に削除されます。
				</AlertDialog.Description>
				<div className="AlertDialogButtons">
					<AlertDialog.Cancel asChild>
						<button className="Button mauve">
							キャンセル
						</button>
					</AlertDialog.Cancel>
					<AlertDialog.Action asChild>
						<button className="Button red">
							はい、アカウントを削除します
						</button>
					</AlertDialog.Action>
				</div>
			</AlertDialog.Content>
		</AlertDialog.Portal>
	</AlertDialog.Root>
);

export default AlertDialogDemo;
