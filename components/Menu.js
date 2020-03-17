import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Animated, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Menu = props => {
	const [state, setState] = useState({
		top: new Animated.Value(900)
	});

	useEffect(() => {
		Animated.spring(state.top, {
			toValue: 0
		}).start();
	}, []);

	const toggleMenu = () => {
		Animated.spring(state.top, {
			toValue: 900
		}).start();
	};

	return (
		<AnimatedContainer style={{ top: state.top }}>
			<Cover />
			<TouchableOpacity onPress={toggleMenu}>
				<CloseView>
					<Ionicons name="md-close" size={20} color="#546bfb" />
				</CloseView>
			</TouchableOpacity>
			<Content />
		</AnimatedContainer>
	);
};

export default Menu;

const CloseView = styled.View`
	width: 44px;
	height: 44px;
	border-radius: 22px;
	background: white;
	justify-content: center;
	align-items: center;
`;

const Container = styled.View`
	position: absolute;
	background: white;
	width: 100%;
	height: 100%;
	z-index: 100;
`;

const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Cover = styled.View`
	height: 142px;
	background: black;
`;

const Content = styled.View`
	height: 900px;
	background: #f0f3f5;
`;
